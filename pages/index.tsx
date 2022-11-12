import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { fetchCategories } from '../assets/js/fetchCategories'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Tabs from '../components/Tabs'
import { Tab } from '@headlessui/react'
import { fetchProducts } from '../assets/js/fetchProducts'
import Product from '../components/Product'
import Basket from '../components/Basket'
import { getSession } from 'next-auth/react'
import { Session } from 'next-auth'

interface Props {
  categories: Category[];
  products: Product[];
  session: Session | null     // | means or
}

const Home = ({ categories, products }: Props ) => {

  // console.log(categories);
  console.log(products);

  const showProducts = (category: number) => {
    return products
    .filter((product) => product.category._ref === categories[category]._id)
    .map((product) => <Product product={product} key={product._id} />); // filter products by category
  };

  return (
    <div className=''>
      <Head>
        <title>Croquetas el Kilo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Basket />
      <main className='relative h-[200vh] bg-white'>
        <Landing />
      </main>
      <section className='relative z-40 -mt-[100vh] min-h-screen bg-orange-200'>
        <div className='space-y-10 py-16'>
          <h1 className='text-center text-4xl font-medium tracking-wide text-gray-700'>New Promos</h1>
          <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
              <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
            </Tab.Panels> 
          </Tab.Group>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home;

// Backend Code:
export const getServerSideProps: GetServerSideProps<Props> = async(
  context) => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  const session = await getSession(context); // It accepts the context 
  
  return {
    props:{
      categories,
      products,
      session,
    },
  };
};