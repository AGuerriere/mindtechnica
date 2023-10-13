import Navbar from "@/components/Navbar"
import HeroTitles from "@/components/HeroTitles"
import { Inter } from 'next/font/google'
import { Bayon } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})


export default function Home(){
  return (
    <>
      <header className="flex flex-col align-center h-screen">
        <Navbar></Navbar>
        <div className="hero">
        <div className="absolute top-40 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="105" viewBox="0 0 61 105" fill="none">
            <path d="M-15.529 103.793L-43.0987 0.901363L59.7928 28.4711L-15.529 103.793Z" stroke="#F2E744"/>
          </svg>
        </div>
        <div className="absolute right-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="156" height="312" viewBox="0 0 156 312" fill="none">
          <path d="M0.683988 115.22L196.622 0.683961L311.158 196.622L115.22 311.158L0.683988 115.22Z" stroke="#4A6DD9"/>
        </svg>
        </div>
        <h1 className={`${bayon.className} uppercase`}>At Mind<span className={`${bayon.className} highlightsTitle`}>Technica</span> We deliver Beautifully handcrafted, customisable and fast <span className={`${bayon.className} highlightsTitle`}>websites</span></h1>
        <div className="flex justify-center mt-10 mb-40">
          <p className={`${inter.className} w-3/4 opacity-90 text-center text-stone-300 text-2xl font-normal leading-9`}>Our team is made of branding wizards and software mavericks</p>
        </div>
        </div>
        <div className="flex justify-evenly">
          <HeroTitles 
            icon="/images/Asset 50@4x.png"
            title="Branding"
            description="Crafting compelling brand identities that captivate, resonate and drive success"
            color="pink"
            />
          <HeroTitles 
            icon="/images/Asset 50@4x.png"
            title="Branding"
            description="Elevating online presence with innovative, user-centric web solutions"
            color="green"
            />
          <HeroTitles 
            icon="/images/Asset 50@4x.png"
            title="Branding"
            description="Creating seamless and intuitive app experience that delight users"
            color="blue"
            />
        </div>
      </header>
      <div className="h-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero rem, nemo sunt vero tempora magnam illum odit assumenda sit placeat eligendi itaque quia non corporis voluptatum quisquam! Magnam dolorem repellendus unde quia provident incidunt porro, sed architecto ipsum nisi commodi cum fuga eveniet numquam! Velit commodi quasi optio molestiae iusto. Obcaecati ipsa reprehenderit ab laboriosam rerum optio odio, doloribus exercitationem natus eveniet dolorem cupiditate officia. Nam consequuntur sint sit harum, dolorem laudantium! Ex, ab! Provident natus ipsa inventore esse, tenetur maiores tempora odit sequi facere non at. Corrupti minus cumque iusto dolorem! Earum reprehenderit dolores quis assumenda tempore voluptate sit repellendus deserunt id consequuntur, quas et odit eum nostrum minima ut nulla sequi. Obcaecati accusamus itaque, tempora eum laudantium quasi cumque harum quaerat debitis labore asperiores sapiente blanditiis, aut soluta voluptate, non quam quis numquam excepturi ab? Fugit, atque quae impedit, dicta ad excepturi quia facere, est quaerat commodi totam nihil tempora. Dolorem, iste numquam. Eveniet eum minima possimus magni, ipsa modi, illum rem suscipit sapiente quidem obcaecati, distinctio doloremque quod dolorum veniam officiis est perspiciatis quis! Quisquam assumenda odit sunt nostrum reiciendis vitae laboriosam laborum non alias expedita dolores autem perspiciatis cum earum odio a hic nemo, minima vero natus? Ipsum reprehenderit illo minus suscipit laudantium esse! Temporibus natus repellendus ex aspernatur qui voluptas neque obcaecati sed enim ipsa distinctio fugiat asperiores dolores nobis hic, eaque tenetur nihil dicta iure corporis adipisci minus aperiam veritatis! Cumque, exercitationem facere voluptatem similique pariatur impedit doloremque cupiditate earum veritatis esse veniam amet repudiandae alias corrupti corporis assumenda minima adipisci reprehenderit illum quae. Veniam error iste excepturi amet possimus veritatis vitae! Officia, magni fugiat aliquid earum autem praesentium animi hic facere molestias officiis maiores excepturi voluptatibus magnam accusantium dolor a vero nostrum et fuga totam, quibusdam, similique libero temporibus! Quibusdam totam ipsa perspiciatis tempore ab est accusamus recusandae dolorem illo maiores vero animi quo impedit magni consectetur aliquid, aspernatur deserunt rem earum, delectus corporis? Vero maxime incidunt commodi esse iure nam, aperiam impedit, ipsa vitae consequatur provident aliquid! Alias aut obcaecati, est doloribus quod atque labore aliquid amet facere soluta earum incidunt maxime sint nihil inventore ipsa omnis nam voluptatibus officia. Dolorem ducimus quo nesciunt sed doloremque, vel corrupti hic nostrum eaque mollitia delectus error rerum ipsa minus earum et nulla, architecto aliquid explicabo ab ullam suscipit id amet. Animi, suscipit? Veniam quos corporis cupiditate blanditiis enim, sint deleniti veritatis rem non facilis et consequatur cumque fugit repellat repudiandae distinctio? Animi sit corrupti quisquam recusandae, impedit reprehenderit totam maiores repellat dolor id accusantium aliquid expedita similique quis eum a! Hic error illo totam sapiente iste vitae exercitationem sed eos! Sed eum et dolore, excepturi optio, veniam voluptates nihil, delectus autem modi quos dolor aut nisi earum animi! Aut soluta sed, ut minima eaque, nisi culpa rem voluptate tempore hic eligendi harum eveniet distinctio, ex natus illo possimus iusto aperiam optio? Quibusdam dolore, dicta sapiente laborum commodi repellendus excepturi labore. Neque adipisci ex, autem labore perferendis sit libero voluptate assumenda voluptatibus sapiente maxime?
        </div>
    </>
  )
}