import Card from '../components/Card'
import Header from '../components/Header'
import Border from '../components/Border'
import learn from '../assets/learn.jpg';
import book from '../assets/book.jpg';
import {BookOpenIcon, CalendarIcon, ClipboardDocumentCheckIcon} from '@heroicons/react/24/solid'
import Processus from '../components/Processus';
import Button from '../components/Button';
import TextToggle from '../components/TextToggle';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/appointment");

  return (
    <>
      <Header />
      <div className='App md:mx-[22vw] lt:mx-[13vw] mx-[1rem]'>
        <h1 className='text-5xl my-8'>MES Tutorat</h1>
        <h2 className='text-xl font-[600]'>Réussissez vos Examens et Concours avec <span className='read-gold'>Brio</span> grâce à l'Assistance Exceptionnelle des <span className='read-gold'>Meilleurs Élèves du Pays !</span></h2>
        <h3 className='text-md'>✨ Brillez dans vos examens et réalisez vos rêves académiques avec notre programme de tutorat <span className='read-gold font-[600]'>réalisé par des diplômés du Lycée Scientifique d’Excellence, Prytanée, Limamou, etc.</span></h3>
        <Button text="Rejoindre les meilleurs élèves du Sénégal" onClick={handleClick} className="cursor-pointer"/>
        <div className=' my-8'>
          <div className='relative'>
            <div className='aspect-video'>
              <iframe className='absolute w-full h-full' src="https://www.youtube.com/embed/K9nYtRHjSYc?si=UxmmrBdG7Rt6e9Ti" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <legend className='text-gray-950 opacity-50'>Carrefour de l’éducation - Lycée d’excellence de Diourbel</legend>      
        </div>
        <Border />
        <div className='text-base py-6 mt-4'>
          <p className='pb-10'>🙋🏿‍♂️ Bienvenue dans notre programme d'excellence académique, où la réussite est la norme. Découvrez comment <span className='read-gold font-[600]'>nos lauréats nationaux</span> peuvent guider votre chemin vers le succès.</p>
          <p>✍🏿 Dédié aux élèves en classe d’examens qui sont profondément engagés à atteindre l'excellence académique.</p>
          <p className='py-3'>🔥 Que vous visiez la réussite éclatante dans vos examens et concours <span className='read-gold font[600]'>ou</span> que vous ayez le désir d'atteindre de nouveaux sommets dans certaines matières, ⬇️</p>
          <p className='read-gold font-[600]'>notre programme est conçu pour vous aider à réaliser vos aspirations académiques.</p>
        </div>
        <section className='flex gap-4 sm:flex-row flex-col'>
          <div className='flex-1'>
            <h2 className='text-3xl font-[600]'>Pourquoi Nous Choisir ?</h2>
            <p className='text-base'>Vous vous demandez pourquoi notre programme est le meilleur choix pour vous ? Voici pourquoi :</p>
            <div className='flex flex-col gap-3'>
              <Card icon="🔥">Tous nos tuteurs sont des <span className='read-gold font-[600]'>lauréats de concours nationaux</span> avec un record de succès impressionnant.</Card>
              <Card icon="🔥">Des sessions de tutorat <span className='read-gold font-[600]'>personnalisées</span> pour répondre aux besoins spécifiques de chaque élève.</Card>
              <Card icon="🔥">Accès à une communauté restreinte des meilleurs élèves du Sénégal et un contact permanent sur <span className='read-gold font-[600]'>WhatsApp</span>.</Card>
              <Card icon="🔥">Accès à une vaste bibliothèque de <span className='read-gold font-[600]'>ressources pédagogiques</span> de qualité.</Card>
              <Card icon="🔥">Des <span className='read-gold font-[600]'>taux de réussite exceptionnels</span> - nos profs atteignent régulièrement les meilleurs scores dans les examens nationaux.</Card>
            </div>
          </div>
          <div className='flex-1'>
            <img src={learn} className='w-auto h-auto mb-3' />
            <div className="flex w-full gap-2 bg-[#f1f1ef] py-4 pl-3 pr-4 rounded-[3px]">
              <p className='flex-shrink-0'>🔥</p>
              <a onClick={handleClick} className='underline cursor-pointer'>Rejoindre les meilleurs élèves du Sénégal →</a>
          </div>
          </div>
        </section>
        <section>
          <h2 className='text-3xl font-[600] mb-8'>Comment Ça Fonctionne ?</h2>
          <h3 className='text-2xl font-[600]'>Formation</h3>
          <div className='flex flex-col gap-3'>
            <Card icon="🔥"><span className='read-gold'>Cours Flexibles et efficace :</span> 2 heures de cours par week-end dans la matière qui vous intéresse, soit un total de 8 heures par mois.</Card>
            <Card icon="🔥"><span className='read-gold'>Encadrement Expert :</span> Bénéficiez de l'encadrement des <span className='read-gold'>meilleurs élèves du Sénégal.</span></Card>
            <Card icon="🔥"><span className='read-gold'>Liberté de Matière :</span> Vous avez la liberté totale de choisir la matière qui vous passionne le plus.</Card>
          </div>
        </section>
        <section className='my-8'>
          <h3 className='text-base my-10'>Notre <span className='read-gold font-[600]'>PROCESSUS</span> est simple et efficace :</h3>
          <Border />
          <div className='flex flex-col gap-4 mt-4'>
            <Processus text="Analyse du niveau de chaque élève pour élaborer un plan d’apprentissage adapté."/>
            <Processus text="Inscription à notre programme et sélection du tuteur idéal pour vous."/>
            <Processus text="Séances de tutorat en ligne ( et en présentiel si nécessaire )."/>
            <Processus text="Accès à des ressources d'apprentissage en ligne 24/7."/>
            <Processus text="Suivi régulier des progrès et ajustements pour assurer le succès."/>
          </div>
        </section>
        <section className='my-8'>
          <h2 className='text-3xl font-[600] mb-8'>Garantie de Réussite</h2>
          <div className="flex flex-col w-full bg-[#f1f1ef] py-4 pl-3 pr-4 rounded-[3px]">
            <BookOpenIcon className='w-6 h-6 text-green'/>
            <p className='pl-8'>Nous croyons en notre programme à tel point que nous offrons une garantie de réussite. Si vous ne voyez pas d'amélioration significative dans vos résultats, nous vous rembourserons intégralement.</p>
        </div>
        </section>
        <section>
          <h2 className='text-3xl font-[600] mb-8'>Besoin d’informations ?</h2>
          <h3>Avez-vous des questions ? Nous sommes là pour vous aider</h3>
          <div className='flex gap-2 items-center mb-8'>
            <CalendarIcon className='w-6 h-6 text-gold' />
            <Button text="Prendre un Rendez-Vous" onClick={handleClick} className="cursor-pointer"/>
          </div>
          <img src={book} className='w-auto h-auto mb-3' />
        </section>
        <section>
          <h2 className='text-3xl font-[600] mb-8'>FAQ's</h2>
          <div className='flex flex-col gap-2 mb-10'>
            <TextToggle title="Qui sont les tuteurs de votre programme ?">
              Les tuteurs de notre programme sont des lauréats de concours nationaux sortis des meilleurs écoles du Sénégal qui ont excellé dans leurs études. Ils ont été soigneusement sélectionnés pour leur expertise académique et leur capacité à guider d'autres élèves vers la réussite.
            </TextToggle>
            <TextToggle title="Quels types d'examens notre programme prépare-t-il ?">
              Notre programme prépare les élèves à une variété d'examens nationaux, y compris [liste des examens]. Nous adaptons nos sessions de tutorat en fonction des besoins spécifiques de chaque élève.
            </TextToggle>
            <TextToggle title="Comment fonctionne le processus d'inscription ?">
              Le processus d'inscription est simple. Vous pouvez vous inscrire en ligne en remplissant notre formulaire d'inscription. Ensuite, nous vous mettrons en contact avec un tuteur adapté à vos besoins.
            </TextToggle>
            <TextToggle title="Quels sont les tarifs de votre programme ?">
              Les tarifs varient en fonction des besoins individuels de chaque élève. Pour connaître nos tarifs détaillés, veuillez prendre un rendez-vous.  Nous serons heureux de discuter de vos besoins spécifiques.
            </TextToggle>
            <TextToggle title="Offrez-vous une garantie de réussite ?">
              Oui, nous croyons en notre programme, c'est pourquoi nous offrons une garantie de réussite. Si vous ne voyez pas d'amélioration significative dans ses résultats académiques, nous vous rembourserons.
            </TextToggle>
            <TextToggle title="Quels sont les avantages de choisir votre programme par rapport à d'autres services de tutorat ?">
              Nous nous distinguons par notre équipe de tuteurs hautement qualifiés, des ressources pédagogiques de qualité et une approche personnalisée. De plus, notre taux de réussite impressionnant parle de lui-même.
            </TextToggle>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
