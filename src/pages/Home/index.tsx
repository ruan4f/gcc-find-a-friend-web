import { Container } from './styles'
import { Select } from '@/components/Select'

import dogHomeHeader from '../../assets/images/dog_home.svg'
import dogsHome from '../../assets/images/dogs_home.png'

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

  return (
    <Container>
      <div>
        <img src={dogHomeHeader} alt="Desenho de um rosto de cachorro" />
        FindAFriend
      </div>
      <div>Leve a felicidade para o seu Lar</div>
      <div>
        <img src={dogsHome} alt="Imagens de 6 carros sorrindo" />
      </div>
      <div>Encontre o animal de estimação ideal para seu estilo de vida!</div>
      <div>
        Busque um amigo:
        <Select label="" name="" options={[]} />
        <Select label="" name="" options={[]} />
        <button>
          <img src="" alt="" />
        </button>
      </div>
    </Container>
  )
}
