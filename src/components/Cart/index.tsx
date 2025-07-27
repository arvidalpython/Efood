import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar,
  Row,
  InputGroup,
  BotaoCarrinho
} from './styles'
import { RootReducer } from '../../store/'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import Formulario from '../Formulario'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [step, setStep] = useState(1)
  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      destinatario: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomecartao: '',
      ncartao: '',
      cvv: '',
      mesvenc: '',
      anovenc: ''
    },
    validationSchema: Yup.object().shape({
      destinatario: Yup.string()
        // .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      cep: Yup.string()
        // .min(13, 'O nome precisa ter pelo menos 5 caracteres')
        // .max(13, 'O nome precisa ter no máximo 13 caracteres')
        .required('Campo obrigatório'),
      numero: Yup.number().required('Campo obrigatório').positive(),
      complemento: Yup.string(),
      nomecartao: Yup.string().required('Campo obrigatório'),
      ncartao: Yup.string().required('Campo obrigatório'),
      cvv: Yup.number().required('Campo obrigatório').positive(),
      mesvenc: Yup.number().required('Campo obrigatório').positive(),
      anovenc: Yup.number().required('Campo obrigatório').positive()
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.destinatario,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: values.numero,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomecartao,
            number: values.ncartao,
            code: values.cvv,
            expires: {
              month: Number(values.mesvenc),
              year: Number(values.anovenc)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += Number(valorAtual.preco))
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  if (!isOpen) return null

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <Sidebar>
          {/* -------------- início do sidebar1 ---------------- */}
          {step === 1 && (
            <div>
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{formataPreco(Number(item.preco))}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button" />
                  </CartItem>
                ))}
              </ul>
              <Prices>
                Valor total <span>{formataPreco(Number(getTotalPrice()))}</span>{' '}
              </Prices>
              <Button
                type="button"
                title="Saiba Mais"
                variant="secondary"
                onClick={nextStep}
              >
                Continuar com a entrega
              </Button>
            </div>
          )}
          {/* -------------- fim do sidebar1 ---------------- */}
          {/* -------------- início do sidebar2 ---------------- */}

          {step === 2 && (
            <div>
              <Formulario title="Entrega">
                <>
                  <div>
                    <InputGroup>
                      <label htmlFor="destinatario">Quem irá receber</label>
                      <input
                        id="destinatario"
                        type="text"
                        value={form.values.destinatario}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'destinatario',
                          form.errors.destinatario
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="endereco">Endereço</label>
                      <input
                        id="endereco"
                        type="text"
                        value={form.values.endereco}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('endereco', form.errors.endereco)}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cidade">Cidade</label>
                      <input
                        id="cidade"
                        type="text"
                        value={form.values.cidade}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cidade', form.errors.cidade)}
                      </small>
                    </InputGroup>
                  </div>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cep">CEP</label>
                      <input
                        id="cep"
                        type="text"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cep', form.errors.cep)}</small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="numero">Número</label>
                      <input
                        id="numero"
                        type="number"
                        value={form.values.numero}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('numero', form.errors.numero)}
                      </small>
                    </InputGroup>
                  </Row>
                  <InputGroup>
                    <label htmlFor="complemento">Complemento (opicional)</label>
                    <input
                      id="complemento"
                      type="text"
                      value={form.values.complemento}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('complemento', form.errors.complemento)}
                    </small>
                  </InputGroup>
                </>
              </Formulario>
              <BotaoCarrinho
                type="button"
                title="Saiba Mais"
                variant="secondary"
                onClick={nextStep}
              >
                Continuar com o pagamento
              </BotaoCarrinho>
              <BotaoCarrinho
                type="button"
                title="Saiba Mais"
                variant="secondary"
                onClick={prevStep}
              >
                Voltar para o carrinho
              </BotaoCarrinho>
            </div>
          )}

          {/* -------------- fim do sidebar2 ---------------- */}
          {/* -------------- início do sidebar3 ---------------- */}
          {step === 3 && (
            <div>
              <Formulario title="">
                <>
                  <div>
                    <h1>
                      Pagamento - Valor a pagar{' '}
                      <span>{formataPreco(Number(getTotalPrice()))}</span>
                    </h1>
                    <InputGroup>
                      <label htmlFor="nomecartao">Nome no cartão</label>
                      <input
                        id="nomecartao"
                        type="text"
                        value={form.values.nomecartao}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('nomecartao', form.errors.nomecartao)}
                      </small>
                    </InputGroup>
                  </div>
                  <Row>
                    <InputGroup maxWidth="228px">
                      <label htmlFor="ncartao">Número do cartão</label>
                      <input
                        id="ncartao"
                        type="text"
                        value={form.values.ncartao}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('ncartao', form.errors.ncartao)}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="87px">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        id="cvv"
                        type="number"
                        value={form.values.cvv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup maxWidth="155px">
                      <label htmlFor="mesvenc">Mês de vencimento</label>
                      <input
                        id="mesvenc"
                        type="number"
                        value={form.values.mesvenc}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('mesvenc', form.errors.mesvenc)}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="155px">
                      <label htmlFor="anovenc">Ano vencimento</label>
                      <input
                        id="anovenc"
                        type="number"
                        value={form.values.anovenc}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('anovenc', form.errors.anovenc)}
                      </small>
                    </InputGroup>
                  </Row>
                </>
              </Formulario>
              {/* <button type="submit">Finalizar pagamento</button> */}
              <BotaoCarrinho
                type="submit"
                title="Saiba Mais"
                variant="secondary"
                onClick={nextStep}
              >
                Finalizar pagamento
              </BotaoCarrinho>
              <BotaoCarrinho
                type="button"
                title="Saiba Mais"
                variant="secondary"
                onClick={prevStep}
              >
                Voltar para a edição de endereço
              </BotaoCarrinho>
            </div>
          )}

          {/* -------------- fim do sidebar3 ---------------- */}

          {/* -------------- início do sidebar4 ---------------- */}
          {step === 4 && (
            <div>
              <Formulario title="">
                <>
                  <div>
                    <h1>Pedido realizado - {data ? data.orderId : ''}</h1>
                    <p>
                      Estamos felizes em informar que seu pedido já está em
                      processo de preparação e, em breve, será entregue no
                      endereço fornecido.
                    </p>
                    <br />
                    <p>
                      Gostaríamos de ressaltar que nossos entregadores não estão
                      autorizados a realizar cobranças extras.
                    </p>
                    <br />
                    <p>
                      Lembre-se da importância de higienizar as mãos após o
                      recebimento do pedido, garantindo assim sua segurança e
                      bem-estar durante a refeição.
                    </p>
                    <br />
                    <p>
                      Esperamos que desfrute de uma deliciosa e agradável
                      experiência gastronômica. Bom apetite!
                    </p>
                  </div>
                </>
              </Formulario>
              <BotaoCarrinho
                type="button"
                title="Saiba Mais"
                variant="secondary"
                onClick={form.handleSubmit}
              >
                Concluir
              </BotaoCarrinho>
            </div>
          )}

          {/* -------------- fim do sidebar4 ---------------- */}
        </Sidebar>
      </CartContainer>
    </form>
  )
}

export default Cart
