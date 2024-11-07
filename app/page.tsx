import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="min-h-screen sm:p-5 font-[family-name:var(--font-geist-sans)]">
      <header>
        <div className="grid grid-cols-6 gap-8">
          <div className="col-start-1">
            <Link href={'https://www.monami.com/'}>
              <Image
                src="/MONAMI_KOR.jpg"
                alt="MONAMI"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="col-span-5 flex items-center justify-around pt-4">
            <ul className="flex items-center gap-20 text-lg font-medium">
              <li>
                <Link href={''}>모나미소개</Link>
              </li>
              <li>
                <Link href={''}>모나미제품</Link>
              </li>
              <li>
                <Link href={''}>NEWS&VIDEO</Link>
              </li>
              <li>
                <Link href={''}>모나미 미술대회</Link>
              </li>
              <li>
                <Link href={''}>고객지원</Link>
              </li>
              <li>
                <Link href={''}>기업구매 / 개발</Link>
              </li>
            </ul>
            <div className="">
              <button type="button">
                <Image
                  src="/icons/icon-menu.svg"
                  alt="메뉴"
                  width={20}
                  height={100}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className=""></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  )
}
