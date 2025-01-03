import styles from './PreguntasFrecuentes.module.scss'
import Head from '../../components/CustomHeads/headPreguntasFrecuentes';
import Nav from '../../components/nav';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import {
  Button,
  Container,
  Divider,
  Card,
  Grid,
  Header,
  Image,
  List,
  Icon,
  Menu,
  Sidebar,
  Visibility,
  Segment,
} from 'semantic-ui-react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['FooterInfo'])),
    }
  }
}

const PreguntasFrecuentes = () => {
  const router = useRouter()
  const FaqPreguntasFrecuentesVenderGenerales = dynamic(import('../../components/FaqPreguntasFrecuentesVenderGenerales'))
  const FaqPreguntasFrecuentesComprarGenerales = dynamic(import('../../components/FaqPreguntasFrecuentesComprarGenerales'))
  const FaqPreguntasFrecuentesVenderChile = dynamic(import('../../components/FaqPreguntasFrecuentesVenderChile'))
  const FaqPreguntasFrecuentesComprarChile = dynamic(import('../../components/FaqPreguntasFrecuentesComprarChile'))
  const FooterInfo = dynamic(import('../../components/FooterInfo'))
  if (router.locale === 'es-AR') {
    return (
      <div>
        <Head title="Preguntas frecuentes para comprar y vender autos seminuevos | Carbula Autos Argentina" />
        <Nav />
        <div className={styles.header}>
        <h1>¿Cómo vender y comprar de forma segura un auto seminuevo?</h1>
        </div>
        <div className={styles.container}>
        <h4>Preguntas frecuentes sobre como vender tu auto</h4>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesVenderGenerales country_code={'ar'}/>
        </div>
        <h4>Preguntas frecuentes sobre como comprar un auto usado</h4>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesComprarGenerales/>
        </div>
      </div>
      <hr />
      <section>
          <FooterInfo grey country_code={'ar'} />
        </section>
      </div>
    )
  }
  if (router.locale === 'es-CL') {
    return (
      <div>
        <Head title="Preguntas frecuentes para comprar y vender autos seminuevos | Carbula Autos Chile" />
        <Nav />
        <div className={styles.header}>
        <h1>¿Cómo vender y comprar de forma segura un auto seminuevo?</h1>
        </div>
        <div className={styles.container}>
        <h4>Preguntas frecuentes sobre como vender tu auto</h4>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesVenderChile/>
        </div>
        <h4>Preguntas frecuentes sobre como comprar un auto usado</h4>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesComprarChile/>
        </div>
      </div>
      <hr />
      <section>
          <FooterInfo grey country_code={'cl'} />
        </section>
      </div>
    )
  }
  if (router.locale === 'es-MX') {
    return (
      <div>
        <Head title="Preguntas frecuentes para comprar y vender autos seminuevos | Carbula Autos México" />
        <Nav />
        <div className={styles.header}>
        <h1>¿Cómo vender y comprar de forma segura un auto seminuevo?</h1>
        </div>
        <div className={styles.container}>
        <h4>Preguntas frecuentes sobre como vender tu auto</h4>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesVenderGenerales country_code={'mx'}/>
        </div>
        <h4>Preguntas frecuentes sobre como comprar un auto usado</h4>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesComprarGenerales/>
        </div>
      </div>
      <hr />
      <section>
          <FooterInfo grey country_code={'mx'} />
        </section>
      </div>
    )
  }
  if (router.locale === 'es-PE') {
    return (
      <div>
        <Head title="Preguntas frecuentes para comprar y vender autos seminuevos | Carbula Autos Perú" />
        <Nav />
        <div className={styles.header}>
        <h1>¿Cómo vender y comprar de forma segura un auto seminuevo?</h1>
        </div>
        <div className={styles.container}>
        <h4>Preguntas frecuentes sobre como vender tu auto</h4>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesVenderGenerales country_code={'pe'}/>
        </div>
        <h4>Preguntas frecuentes sobre como comprar un auto usado</h4>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesComprarGenerales/>
        </div>
      </div>
      <hr />
      <section>
          <FooterInfo grey country_code={'pe'} />
        </section>
      </div>
    )
  }
  if (router.locale === 'es-UY') {
    return <div>
        <Head title="Preguntas frecuentes para comprar y vender autos seminuevos | Carbula Autos Uruguay" />
      <Nav />
      <div className={styles.header}>
        <h1>¿Cómo vender y comprar de forma segura un auto seminuevo?</h1>
        </div>
        <div className={styles.container}>
        <h4>Preguntas frecuentes sobre como vender tu auto</h4>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesVenderGenerales country_code={'uy'}/>
        </div>
        <h4>Preguntas frecuentes sobre como comprar un auto usado</h4>
        <div className={styles.preguntas}>
        <FaqPreguntasFrecuentesComprarGenerales/>
        </div>
      </div>
      <hr />
      <section>
          <FooterInfo grey country_code={'uy'} />
        </section>
    </div>
  }
}

export default PreguntasFrecuentes
