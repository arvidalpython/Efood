class Cardapio {
  nota: string
  description: string
  image: string
  infos: string[]
  infos2: string
  botaosmais: string
  title: string
  id: number
  imgestrela: string

  constructor(
    nota: string,
    description: string,
    image: string,
    infos: string[],
    infos2: string,
    botaosmais: string,
    title: string,
    id: number,
    imgestrela: string
  ) {
    this.id = id
    this.nota = nota
    this.description = description
    this.image = image
    this.infos = infos
    this.infos2 = infos2
    this.botaosmais = botaosmais
    this.title = title
    this.imgestrela = imgestrela
  }
}

export default Cardapio
