import AllProducts from './AllProducts'
import InputForm from './InputForm'

export default function Home() {
  return (
    <main class="py-16">
    <div class="productWrapper">
      <AllProducts></AllProducts>
      <div>
    <InputForm></InputForm>
      </div>
    </div>
  </main>
  )
}
