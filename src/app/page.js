import Image from "next/image";
import i18n from '@/utils/i18n.js'

export default function Home() {

  return (
    <main >
      <h1>{i18n.t('appTitle')}</h1>
    </main>
  );
}
