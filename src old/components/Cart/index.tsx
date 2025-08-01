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
import { Navigate, useNavigate } from 'react-router-dom'

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
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      cep: Yup.string()
        .min(9, 'O CEP precisa ter pelo menos 9 caracteres')
        .max(9, 'O CEP precisa ter no máximo 9 caracteres')
        .required('Campo obrigatório'),
      numero: Yup.number().required('Campo obrigatório').positive(),
      complemento: Yup.string(),
      nomecartao: Yup.string()
        .required('Campo obrigatório')
        .min(3, 'O nome precisa ter pelo menos 3 caracteres'),
      ncartao: Yup.string()
        .required('Campo obrigatório')
        .min(16, 'O número precisa ter pelo menos 16 caracteres')
        .max(16, 'O número precisa ter no máximo 16 caracteres'),
      cvv: Yup.number()
        .required('Campo obrigatório')
        .positive()
        .min(3, 'O número precisa ter pelo menos 3 caracteres')
        .max(3, 'O número precisa ter no máximo 3 caracteres'),
      mesvenc: Yup.number()
        .required('Campo obrigatório')
        .positive()
        .min(2, 'O mês precisa ter pelo menos 2 caracteres')
        .max(2, 'O mês precisa ter no máximo 2 caracteres'),
      anovenc: Yup.number()
        .required('Campo obrigatório')
        .positive()
        .min(4, 'O ano precisa ter pelo menos 4 caracteres')
        .max(4, 'O ano precisa ter no máximo 4 caracteres')
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
      if (valorAtual.preco) {
        return (acumulador += Number(valorAtual.preco))
      }
      return 0
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

  const checkInputHasError = (fieldName: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    const hasError = estaAlterado && estaInvalido
    return hasError
  }

  if (items.length === 0) {
    dispatch(close())
    return <Navigate to="/" />
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
                        className={
                          checkInputHasError('destinatario') ? 'error' : ''
                        }
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="endereco">Endereço</label>
                      <input
                        id="endereco"
                        type="text"
                        value={form.values.endereco}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('endereco') ? 'error' : ''
                        }
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cidade">Cidade</label>
                      <input
                        id="cidade"
                        type="text"
                        value={form.values.cidade}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cidade') ? 'error' : ''}
                      />
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
                        className={checkInputHasError('cep') ? 'error' : ''}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="numero">Número</label>
                      <input
                        id="numero"
                        type="number"
                        value={form.values.numero}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('numero') ? 'error' : ''}
                      />
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
                      className={
                        checkInputHasError('complemento') ? 'error' : ''
                      }
                    />
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
                        className={
                          checkInputHasError('nomecartao') ? 'error' : ''
                        }
                      />
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
                        className={checkInputHasError('ncartao') ? 'error' : ''}
                      />
                    </InputGroup>
                    <InputGroup maxWidth="87px">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        id="cvv"
                        type="number"
                        value={form.values.cvv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cvv') ? 'error' : ''}
                      />
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
                        className={checkInputHasError('mesvenc') ? 'error' : ''}
                      />
                    </InputGroup>
                    <InputGroup maxWidth="155px">
                      <label htmlFor="anovenc">Ano vencimento</label>
                      <input
                        id="anovenc"
                        type="number"
                        value={form.values.anovenc}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('anovenc') ? 'error' : ''}
                      />
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
