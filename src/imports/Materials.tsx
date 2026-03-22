import svgPaths from "./svg-wbxuqi4u9q";
import imgVectaryTexture from "figma:asset/e59fc21ac16e6967420fb170b699ffe1953272cf.png";
import imgVectaryTexture1 from "figma:asset/c7a7df1a506368600fcc8e622f8ecdb62c928e92.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] gap-[16px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="heading">
      <p className="relative shrink-0 text-[96px] text-black tracking-[-1.92px]" style={{ fontFeatureSettings: "'liga' 0" }}>
        Materiais visuais de apoio
      </p>
      <p className="relative shrink-0 text-[#666] text-[40px] tracking-[-0.8px]" style={{ fontFeatureSettings: "'liga' 0" }}>
        Banner e publicação
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[335px] top-[-195px]">
      <div className="absolute h-[846px] left-[953px] top-[117px] w-[814px]" data-name="Hourglass">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 814 846">
          <path d={svgPaths.p9b6c640} fill="var(--fill-0, #D14A00)" id="Hourglass" />
        </svg>
      </div>
      <div className="absolute h-[1289px] left-[335px] top-[-14px] w-[1643px]" data-name="Vectary texture">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVectaryTexture} />
      </div>
      <div className="absolute flex h-[112.504px] items-center justify-center left-[1205px] top-[785px] w-[442.171px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.77deg]">
          <div className="h-[61.285px] relative w-[438px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438 61.2849">
              <ellipse cx="219" cy="30.6424" fill="var(--fill-0, black)" id="Ellipse 2" rx="219" ry="30.6424" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[1385.664px] items-center justify-center left-[643.23px] top-[-195px] w-[1676.526px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.74deg]">
          <div className="h-[1212.829px] relative w-[1544.936px]" data-name="Vectary texture">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVectaryTexture1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Hand() {
  return (
    <div className="absolute h-[169.031px] left-[-10.42px] top-[-9.79px] w-[111.495px]" data-name="hand">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.495 169.031">
        <g id="hand">
          <path d={svgPaths.p3840e380} fill="var(--fill-0, black)" id="Vector 12" />
          <path d={svgPaths.p22606d00} fill="var(--fill-0, black)" id="Vector 11" />
          <path d={svgPaths.p33a65800} fill="var(--fill-0, black)" id="Vector 10" />
          <path d={svgPaths.pfbe8180} fill="var(--fill-0, #FCFCFC)" id="Vector 13" />
          <path d={svgPaths.p199b7a00} fill="var(--fill-0, #FCFCFC)" id="Vector 16" />
          <path d={svgPaths.p979c300} fill="var(--fill-0, #FCFCFC)" id="Vector 14" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[105.789px] left-1/2 top-[calc(50%+0.16px)] w-[96.632px]">
      <Hand />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#ff5c00] overflow-clip relative rounded-[136.421px] shrink-0 size-[120px]">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0">
      <Frame1 />
      <div className="h-[67.313px] relative shrink-0 w-[391.219px]" data-name="Mizz">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 391.219 67.3125">
          <g id="Mizz">
            <path d={svgPaths.p3e5bae00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p206c7500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p29e83870} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2f97b500} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#ff5c00] content-stretch flex flex-col items-start left-[120px] overflow-clip py-[48px] rounded-[32px] top-[247px]">
      <Frame3 />
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-[#fc5b00] h-[1080px] overflow-clip relative shrink-0 w-[1920px]" data-name="Banner">
      <Group />
      <div className="absolute font-['Be_Vietnam:Regular',sans-serif] leading-[0] left-[121px] not-italic text-[64px] text-[rgba(255,255,255,0.9)] top-[498px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">
          <span className="leading-[0.986]">{`seu melhor `}</span>
          <span className="font-['Be_Vietnam:Bold',sans-serif] leading-[0.986] not-italic">{`facilitador `}</span>
        </p>
        <p className="mb-0">
          <span className="font-['Be_Vietnam:Bold',sans-serif] leading-[0.986] not-italic">de pedidos</span>
          <span className="leading-[0.986]">{` em `}</span>
        </p>
        <p className="leading-[0.986]">restaurantes</p>
      </div>
      <Frame />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-32px] top-[-195px]">
      <div className="absolute h-[846px] left-[586px] top-[117px] w-[814px]" data-name="Hourglass">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 814 846">
          <path d={svgPaths.p9b6c640} fill="var(--fill-0, #D14A00)" id="Hourglass" />
        </svg>
      </div>
      <div className="absolute h-[1289px] left-[-32px] top-[-14px] w-[1643px]" data-name="Vectary texture">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVectaryTexture} />
      </div>
      <div className="absolute flex h-[112.504px] items-center justify-center left-[838px] top-[785px] w-[442.171px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.77deg]">
          <div className="h-[61.285px] relative w-[438px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438 61.2849">
              <ellipse cx="219" cy="30.6424" fill="var(--fill-0, black)" id="Ellipse 2" rx="219" ry="30.6424" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[1385.664px] items-center justify-center left-[276.23px] top-[-195px] w-[1676.526px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.74deg]">
          <div className="h-[1212.829px] relative w-[1544.936px]" data-name="Vectary texture">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVectaryTexture1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Banner1() {
  return (
    <div className="bg-[#fc5b00] h-[1080px] overflow-clip relative shrink-0 w-[1920px]" data-name="Banner">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-452px] top-[-195px]">
      <div className="absolute h-[846px] left-[166px] top-[117px] w-[814px]" data-name="Hourglass">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 814 846">
          <path d={svgPaths.p9b6c640} fill="var(--fill-0, #D14A00)" id="Hourglass" />
        </svg>
      </div>
      <div className="absolute h-[1289px] left-[-452px] top-[-14px] w-[1643px]" data-name="Vectary texture">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVectaryTexture} />
      </div>
      <div className="absolute flex h-[112.504px] items-center justify-center left-[418px] top-[785px] w-[442.171px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.77deg]">
          <div className="h-[61.285px] relative w-[438px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438 61.2849">
              <ellipse cx="219" cy="30.6424" fill="var(--fill-0, black)" id="Ellipse 2" rx="219" ry="30.6424" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[1385.664px] items-center justify-center left-[-143.77px] top-[-195px] w-[1676.526px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.74deg]">
          <div className="h-[1212.829px] relative w-[1544.936px]" data-name="Vectary texture">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVectaryTexture1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function InstagramPost() {
  return (
    <div className="bg-[#f45901] overflow-clip relative shrink-0 size-[1080px]" data-name="Instagram post - 1">
      <Group2 />
    </div>
  );
}

function InstagramPost1() {
  return (
    <div className="bg-[#f45901] overflow-clip relative shrink-0 size-[1080px]" data-name="Instagram post - 2">
      <div className="absolute h-[846px] left-[500px] top-[117px] w-[814px]" data-name="Hourglass">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 814 846">
          <path d={svgPaths.p9b6c640} fill="var(--fill-0, #D14A00)" id="Hourglass" />
        </svg>
      </div>
      <div className="absolute flex h-[2349.422px] items-center justify-center left-[-316px] top-[-628px] w-[2484.84px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-31.93deg]">
          <div className="h-[1542.803px] relative w-[1966.38px]" data-name="Vectary texture">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVectaryTexture} />
          </div>
        </div>
      </div>
      <div className="absolute font-['Syncopate:Bold',sans-serif] leading-[normal] left-[80px] not-italic text-[96.111px] text-white top-[304px] whitespace-nowrap">
        <p className="mb-0">Seu</p>
        <p className="mb-0">novo</p>
        <p className="mb-0">app</p>
        <p>chegou</p>
      </div>
    </div>
  );
}

function MaterialsContent() {
  return (
    <div className="content-stretch flex gap-[120px] items-start relative shrink-0" data-name="guide">
      <Banner />
      <Banner1 />
      <InstagramPost />
      <InstagramPost1 />
    </div>
  );
}

export default function Materials() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[80px] items-start p-[120px] relative size-full" data-name="materiais">
      <Heading />
      <MaterialsContent />
    </div>
  );
}