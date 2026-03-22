import svgPaths from "./svg-mndlve5vsl";

function Heading() {
  return (
    <div className="content-stretch flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] gap-[16px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="heading">
      <p className="relative shrink-0 text-[96px] text-black tracking-[-1.92px]" style={{ fontFeatureSettings: "'liga' 0" }}>
        Componentes
      </p>
      <p className="relative shrink-0 text-[#666] text-[40px] tracking-[-0.8px]" style={{ fontFeatureSettings: "'liga' 0" }}>
        Material Theme
      </p>
    </div>
  );
}

function Name() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[64px] text-black whitespace-nowrap">Button</p>
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Button</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">8</p>
      </div>
    </div>
  );
}

function Attribute() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border radius :</p>
      </div>
      <Component />
    </div>
  );
}

function Element() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label />
      <Attribute />
    </div>
  );
}

function AnatomyItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot />
      <Element />
    </div>
  );
}

function Dot1() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame1 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Center</p>
      </div>
    </div>
  );
}

function Attribute1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text align :</p>
      </div>
      <Component1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Heading/H5</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text style :</p>
      </div>
      <Component2 />
    </div>
  );
}

function Element1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label1 />
      <Attribute1 />
      <Attribute2 />
    </div>
  );
}

function AnatomyItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot1 />
      <Element1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[300px]" data-name="Content">
      <AnatomyItem />
      <AnatomyItem1 />
    </div>
  );
}

function Dot2() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function MarkerButton() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%-114px)] overflow-clip top-1/2 w-[48px]" data-name="Marker: Button">
      <div className="-translate-y-1/2 absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Rectangle" />
      <Dot2 />
    </div>
  );
}

function Dot3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#c54600] left-1/2 overflow-clip rounded-[100px] size-[24px] top-0" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function MarkerLabelText() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[64px] left-1/2 overflow-clip top-[calc(50%-44px)] w-[24px]" data-name="Marker: label-text">
      <div className="-translate-x-1/2 absolute bg-[#c54600] bottom-0 left-[calc(50%+0.5px)] top-0 w-px" data-name="Rectangle" />
      <Dot3 />
    </div>
  );
}

function Artwork() {
  return (
    <div className="bg-[#f2f2f2] h-[256px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black content-stretch flex flex-col items-center justify-center left-1/2 overflow-clip p-[16px] rounded-[8px] top-1/2 w-[180px]" data-name="Button">
        <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[24px]">Enabled</p>
        </div>
      </div>
      <MarkerButton />
      <MarkerLabelText />
    </div>
  );
}

function Exhibit() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content />
      <Artwork />
    </div>
  );
}

function Anatomy() {
  return (
    <div className="relative shrink-0 w-full" data-name="Anatomy">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">Anatomy</p>
          <Exhibit />
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">filled (default)</p>
    </div>
  );
}

function Option() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame2 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Button</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Neutral/neutral-color-10</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Background color :</p>
      </div>
      <Component3 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Center</p>
      </div>
    </div>
  );
}

function Attribute4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Stroke alignment :</p>
      </div>
      <Component4 />
    </div>
  );
}

function Element2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label3 />
      <Attribute3 />
      <Attribute4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame3 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Neutral/neutral-color-1</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component5 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Center</p>
      </div>
    </div>
  );
}

function Attribute6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Stroke alignment :</p>
      </div>
      <Component6 />
    </div>
  );
}

function Element3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label4 />
      <Attribute5 />
      <Attribute6 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[300px]" data-name="Content">
      <Option />
      <Element2 />
      <Element3 />
    </div>
  );
}

function Artwork1() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black content-stretch flex flex-col items-center justify-center left-1/2 overflow-clip p-[16px] rounded-[8px] top-1/2 w-[180px]" data-name="Button">
        <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[24px]">Enabled</p>
        </div>
      </div>
    </div>
  );
}

function Exhibit1() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content1 />
      <Artwork1 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">outlined</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame4 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Button</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/outline</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border color :</p>
      </div>
      <Component7 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Inside</p>
      </div>
    </div>
  );
}

function Attribute8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Stroke alignment :</p>
      </div>
      <Component8 />
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Attribute9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border weight :</p>
      </div>
      <Component9 />
    </div>
  );
}

function Element4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label6 />
      <Attribute7 />
      <Attribute8 />
      <Attribute9 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame5 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/primary</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component10 />
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Inside</p>
      </div>
    </div>
  );
}

function Attribute11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Stroke alignment :</p>
      </div>
      <Component11 />
    </div>
  );
}

function Element5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label7 />
      <Attribute10 />
      <Attribute11 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[300px]" data-name="Content">
      <Option1 />
      <Element4 />
      <Element5 />
    </div>
  );
}

function Artwork2() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[8px] top-1/2 w-[180px]" data-name="Button">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[16px] relative rounded-[inherit] w-full">
          <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a73a00] text-[16px] text-center tracking-[-0.48px] whitespace-nowrap">
            <p className="leading-[24px]">Enabled</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Exhibit2() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content2 />
      <Artwork2 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">text</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame6 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/primary</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component12 />
    </div>
  );
}

function Element6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label9 />
      <Attribute12 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[300px]" data-name="Content">
      <Option2 />
      <Element6 />
    </div>
  );
}

function Artwork3() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 overflow-clip p-[16px] rounded-[8px] top-1/2 w-[180px]" data-name="Button">
        <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a73a00] text-[16px] text-center tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[24px]">Enabled</p>
        </div>
      </div>
    </div>
  );
}

function Exhibit3() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content3 />
      <Artwork3 />
    </div>
  );
}

function Configuration() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="Configuration">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">Configuration</p>
      <Exhibit1 />
      <Exhibit2 />
      <Exhibit3 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">enabled (default)</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame7 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Button</p>
    </div>
  );
}

function Component13() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Neutral/neutral-color-10</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Background color :</p>
      </div>
      <Component13 />
    </div>
  );
}

function Element7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label11 />
      <Attribute13 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame8 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component14() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Neutral/neutral-color-1</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component14 />
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">100%</p>
      </div>
    </div>
  );
}

function Attribute15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Opacity :</p>
      </div>
      <Component15 />
    </div>
  );
}

function Element8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label12 />
      <Attribute14 />
      <Attribute15 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[300px]" data-name="Content">
      <Option3 />
      <Element7 />
      <Element8 />
    </div>
  );
}

function Artwork4() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black content-stretch flex flex-col items-center justify-center left-1/2 overflow-clip p-[16px] rounded-[8px] top-1/2 w-[180px]" data-name="Button">
        <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[24px]">Enabled</p>
        </div>
      </div>
    </div>
  );
}

function Exhibit4() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content4 />
      <Artwork4 />
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">hovered</p>
    </div>
  );
}

function Option4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label13 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame9 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Button</p>
    </div>
  );
}

function Component16() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Neutral/neutral-color-9</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Background color :</p>
      </div>
      <Component16 />
    </div>
  );
}

function Element9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label14 />
      <Attribute16 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[300px]" data-name="Content">
      <Option4 />
      <Element9 />
    </div>
  );
}

function Artwork5() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#333] content-stretch flex flex-col items-center justify-center left-1/2 overflow-clip p-[16px] rounded-[8px] top-1/2 w-[180px]" data-name="Button">
        <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[24px]">Hovered</p>
        </div>
      </div>
    </div>
  );
}

function Exhibit5() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content5 />
      <Artwork5 />
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">focused</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label15 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame10 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Button</p>
    </div>
  );
}

function Component17() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Neutral/neutral-color-9</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Background color :</p>
      </div>
      <Component17 />
    </div>
  );
}

function Element10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label16 />
      <Attribute17 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[300px]" data-name="Content">
      <Option5 />
      <Element10 />
    </div>
  );
}

function Artwork6() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#333] content-stretch flex flex-col items-center justify-center left-1/2 overflow-clip p-[16px] rounded-[8px] top-1/2 w-[180px]" data-name="Button">
        <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[24px]">Focused</p>
        </div>
      </div>
    </div>
  );
}

function Exhibit6() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content6 />
      <Artwork6 />
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">pressed</p>
    </div>
  );
}

function Option6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label17 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label18() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame11 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Button</p>
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Neutral/neutral-color-9</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Background color :</p>
      </div>
      <Component18 />
    </div>
  );
}

function Element11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label18 />
      <Attribute18 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[300px]" data-name="Content">
      <Option6 />
      <Element11 />
    </div>
  );
}

function Artwork7() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#333] content-stretch flex flex-col items-center justify-center left-1/2 overflow-clip p-[16px] rounded-[8px] top-1/2 w-[180px]" data-name="Button">
        <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[24px]">Pressed</p>
        </div>
      </div>
    </div>
  );
}

function Exhibit7() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content7 />
      <Artwork7 />
    </div>
  );
}

function Label19() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">disabled</p>
    </div>
  );
}

function Option7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label19 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label20() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame12 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component19() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/on-surface</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component19 />
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">30%</p>
      </div>
    </div>
  );
}

function Attribute20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Opacity :</p>
      </div>
      <Component20 />
    </div>
  );
}

function Element12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label20 />
      <Attribute19 />
      <Attribute20 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Content">
      <Option7 />
      <Element12 />
    </div>
  );
}

function Artwork8() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 overflow-clip p-[16px] rounded-[8px] top-1/2 w-[180px]" data-name="Button">
        <div className="absolute bg-[#a08d86] inset-0 opacity-12" data-name="background" />
        <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-30 relative shrink-0 text-[#2d1600] text-[16px] text-center tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[24px]">Disabled</p>
        </div>
      </div>
    </div>
  );
}

function Exhibit8() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content8 />
      <Artwork8 />
    </div>
  );
}

function State() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="State">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">State</p>
      <Exhibit4 />
      <Exhibit5 />
      <Exhibit6 />
      <Exhibit7 />
      <Exhibit8 />
    </div>
  );
}

function Label21() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">False (default)</p>
    </div>
  );
}

function Option8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label21 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[300px]" data-name="Content">
      <Option8 />
    </div>
  );
}

function Artwork9() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black content-stretch flex flex-col items-center justify-center left-1/2 overflow-clip p-[16px] rounded-[8px] top-1/2 w-[180px]" data-name="Button">
        <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[24px]">Enabled</p>
        </div>
      </div>
    </div>
  );
}

function Exhibit9() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content9 />
      <Artwork9 />
    </div>
  );
}

function Label22() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">True</p>
    </div>
  );
}

function Option9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label22 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[300px]" data-name="Content">
      <Option9 />
    </div>
  );
}

function Artwork10() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black content-stretch flex gap-[8px] items-center justify-center left-1/2 overflow-clip p-[16px] rounded-[8px] top-1/2 w-[180px]" data-name="Button">
        <div className="relative shrink-0 size-[18px]" data-name="icon">
          <div className="absolute inset-[16.67%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.p34f14f00} fill="var(--fill-0, white)" id="icon" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[24px]">Enabled</p>
        </div>
      </div>
    </div>
  );
}

function Exhibit10() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content10 />
      <Artwork10 />
    </div>
  );
}

function ShowIcon() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="Show Icon">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">Show Icon</p>
      <Exhibit9 />
      <Exhibit10 />
    </div>
  );
}

function Properties() {
  return (
    <div className="relative shrink-0 w-full" data-name="Properties">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">Properties</p>
          <Configuration />
          <State />
          <ShowIcon />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label23() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame13 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Button</p>
    </div>
  );
}

function Component21() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Vertical</p>
      </div>
    </div>
  );
}

function Attribute21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Direction :</p>
      </div>
      <Component21 />
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Middle center</p>
      </div>
    </div>
  );
}

function Attribute22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Alignment :</p>
      </div>
      <Component22 />
    </div>
  );
}

function Component23() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Vertical resizing :</p>
      </div>
      <Component23 />
    </div>
  );
}

function Component24() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Fixed</p>
      </div>
    </div>
  );
}

function Attribute24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Horizontal resizing :</p>
      </div>
      <Component24 />
    </div>
  );
}

function Component25() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">8</p>
      </div>
    </div>
  );
}

function Attribute25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Item spacing:</p>
      </div>
      <Component25 />
    </div>
  );
}

function Component26() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">16</p>
      </div>
    </div>
  );
}

function Attribute26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Padding :</p>
      </div>
      <Component26 />
    </div>
  );
}

function Element13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label23 />
      <Attribute21 />
      <Attribute22 />
      <Attribute23 />
      <Attribute24 />
      <Attribute25 />
      <Attribute26 />
    </div>
  );
}

function Elements() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Elements">
      <Element13 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[300px]" data-name="Content">
      <Elements />
    </div>
  );
}

function DirectionArrow() {
  return (
    <div className="relative size-[16px]" data-name="Direction arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5294)" id="Direction arrow">
          <path d={svgPaths.p31f6a500} fill="var(--stroke-0, #6B6B6B)" id="Line 1" />
        </g>
        <defs>
          <clipPath id="clip0_3_5294">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component27() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 11.0459">
            <path d={svgPaths.p25997470} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 11.0459">
            <path d={svgPaths.p25997470} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing() {
  return (
    <div className="h-[16px] overflow-clip relative w-[56px]" data-name="Element resizing">
      <Component27 />
    </div>
  );
}

function ElementResizing1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-[calc(50%-76px)] w-[180px]" data-name="Element resizing">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 16">
        <g id="Element resizing">
          <line id="Line" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="square" strokeWidth="1.5" x1="0.75" x2="179.25" y1="7.75" y2="7.75" />
          <line id="Edge 2" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="0.75" y1="2.75" y2="13.25" />
          <line id="Edge 1" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="round" strokeWidth="1.5" x1="179.25" x2="179.25" y1="13.25" y2="2.75" />
        </g>
      </svg>
    </div>
  );
}

function Component28() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 7.36396">
            <path d={svgPaths.p1cd91c00} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 7.36396">
            <path d={svgPaths.p1cd91c00} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChildElementResizing() {
  return (
    <div className="h-[16px] overflow-clip relative w-[24px]" data-name="Child element resizing">
      <Component28 />
    </div>
  );
}

function PaddingTop() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-17px)] top-[calc(50%-20px)]" data-name="PADDING TOP">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[16px] left-1/2 top-[calc(50%-20px)] w-[180px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%-27px)] w-[196px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="196" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%-12px)] w-[196px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="196" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-124px)] not-italic text-[#007d00] text-[12px] top-[calc(50%-28px)] whitespace-nowrap">16</p>
    </div>
  );
}

function PaddingBottom() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-17px)] top-[calc(50%+20px)]" data-name="PADDING BOTTOM">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[16px] left-1/2 top-[calc(50%+20px)] w-[180px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%+13px)] w-[196px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="196" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%+28px)] w-[196px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="196" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-124px)] not-italic text-[#007d00] text-[12px] top-[calc(50%+12px)] whitespace-nowrap">16</p>
    </div>
  );
}

function PaddingLeft() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-82px)] top-[calc(50%-16px)]" data-name="PADDING LEFT">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[24px] left-[calc(50%-82px)] top-1/2 w-[16px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[72px] items-center justify-center left-[calc(50%-90px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[72px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="72" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[72px] items-center justify-center left-[calc(50%-75px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[72px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="72" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-89px)] not-italic text-[#007d00] text-[12px] top-[calc(50%-60px)] whitespace-nowrap">16</p>
    </div>
  );
}

function PaddingRight() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+82px)] top-[calc(50%-16px)]" data-name="PADDING RIGHT">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[24px] left-[calc(50%+82px)] top-1/2 w-[16px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[72px] items-center justify-center left-[calc(50%+74px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[72px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="72" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[72px] items-center justify-center left-[calc(50%+89px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[72px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="72" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+75px)] not-italic text-[#007d00] text-[12px] top-[calc(50%-60px)] whitespace-nowrap">16</p>
    </div>
  );
}

function Artwork11() {
  return (
    <div className="bg-[#f2f2f2] h-[204px] overflow-clip relative shrink-0 w-[580px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black content-stretch flex flex-col items-center justify-center left-1/2 opacity-20 overflow-clip p-[16px] rounded-[8px] top-1/2 w-[180px]" data-name="Button">
        <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[24px]">Enabled</p>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black content-stretch flex flex-col items-center justify-center left-1/2 opacity-20 overflow-clip p-[16px] rounded-[8px] top-1/2 w-[180px]" data-name="Element annotated">
        <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[24px]">Enabled</p>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[56px] left-1/2 top-1/2 w-[180px]" data-name="Element outline">
        <div aria-hidden="true" className="absolute border border-[#0d69d4] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-138px)] size-[16px] top-[calc(50%-60px)]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <DirectionArrow />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.014px] left-[calc(50%-138px)] top-[calc(50%-75.99px)] w-[16px]" data-name="Alignment: Middle center">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.014">
          <path clipRule="evenodd" d={svgPaths.p20b6c0} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Alignment: Middle center" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[56px] items-center justify-center left-[calc(50%-138px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ElementResizing />
        </div>
      </div>
      <ElementResizing1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[24px] items-center justify-center left-[calc(50%-98px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ChildElementResizing />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(13,105,212,0.2)] h-[24px] left-1/2 top-1/2 w-[63px]" data-name="Child element overlay" />
      <PaddingTop />
      <PaddingBottom />
      <PaddingLeft />
      <PaddingRight />
    </div>
  );
}

function Exhibit11() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content11 />
      <Artwork11 />
    </div>
  );
}

function Spacing() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="Spacing">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">Spacing</p>
      <Exhibit11 />
    </div>
  );
}

function LayoutAndSpacing() {
  return (
    <div className="relative shrink-0 w-full" data-name="Layout and spacing">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">Layout and spacing</p>
          <Spacing />
        </div>
      </div>
    </div>
  );
}

function Specification() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[1072px]" data-name="Specification">
      <Name />
      <Anatomy />
      <Properties />
      <LayoutAndSpacing />
    </div>
  );
}

function Name1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[64px] text-black whitespace-nowrap">Text Field</p>
        </div>
      </div>
    </div>
  );
}

function Dot4() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label24() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame14 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">text-field</p>
    </div>
  );
}

function Component29() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">8</p>
      </div>
    </div>
  );
}

function Attribute27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Top left radius :</p>
      </div>
      <Component29 />
    </div>
  );
}

function Component30() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">8</p>
      </div>
    </div>
  );
}

function Attribute28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Top right radius :</p>
      </div>
      <Component30 />
    </div>
  );
}

function Element14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label24 />
      <Attribute27 />
      <Attribute28 />
    </div>
  );
}

function AnatomyItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot4 />
      <Element14 />
    </div>
  );
}

function Dot5() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label25() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame15 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">text field</p>
    </div>
  );
}

function Element15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Element">
      <Label25 />
    </div>
  );
}

function AnatomyItem3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot5 />
      <Element15 />
    </div>
  );
}

function Dot6() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label26() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame16 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">state-layer</p>
    </div>
  );
}

function Element16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Element">
      <Label26 />
    </div>
  );
}

function AnatomyItem4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot6 />
      <Element16 />
    </div>
  );
}

function Dot7() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label27() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame17 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">input-text</p>
    </div>
  );
}

function Component31() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/on-surface</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component31 />
    </div>
  );
}

function Component32() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Paragraph/Body</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text style :</p>
      </div>
      <Component32 />
    </div>
  );
}

function Element17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label27 />
      <Attribute29 />
      <Attribute30 />
    </div>
  );
}

function AnatomyItem5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot7 />
      <Element17 />
    </div>
  );
}

function Dot8() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label28() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame18 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Element18() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Element">
      <Label28 />
    </div>
  );
}

function AnatomyItem6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot8 />
      <Element18 />
    </div>
  );
}

function Dot9() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">6</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label29() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame19 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Element19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Element">
      <Label29 />
    </div>
  );
}

function AnatomyItem7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot9 />
      <Element19 />
    </div>
  );
}

function Dot10() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label30() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame20 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">trailing-icon</p>
    </div>
  );
}

function Component33() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">icon-button</p>
      </div>
    </div>
  );
}

function Attribute31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Depends on :</p>
      </div>
      <Component33 />
    </div>
  );
}

function Component34() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">standard</p>
      </div>
    </div>
  );
}

function Attribute32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Configuration :</p>
      </div>
      <Component34 />
    </div>
  );
}

function Component35() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">enabled</p>
      </div>
    </div>
  );
}

function Attribute33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">State :</p>
      </div>
      <Component35 />
    </div>
  );
}

function Element20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label30 />
      <Attribute31 />
      <Attribute32 />
      <Attribute33 />
    </div>
  );
}

function AnatomyItem8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot10 />
      <Element20 />
    </div>
  );
}

function Dot11() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">8</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label31() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame21 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">supporting-text</p>
    </div>
  );
}

function Element21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Element">
      <Label31 />
    </div>
  );
}

function AnatomyItem9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot11 />
      <Element21 />
    </div>
  );
}

function Dot12() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">9</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label32() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame22 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">supporting-text</p>
    </div>
  );
}

function Element22() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Element">
      <Label32 />
    </div>
  );
}

function AnatomyItem10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot12 />
      <Element22 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <AnatomyItem2 />
      <AnatomyItem3 />
      <AnatomyItem4 />
      <AnatomyItem5 />
      <AnatomyItem6 />
      <AnatomyItem7 />
      <AnatomyItem8 />
      <AnatomyItem9 />
      <AnatomyItem10 />
    </div>
  );
}

function InputText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText />
      <LabelText />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer1 />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content13 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer />
    </div>
  );
}

function SupportingText() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Dot13() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function MarkerTextField() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%-129px)] overflow-clip top-1/2 w-[48px]" data-name="Marker: text-field">
      <div className="-translate-y-1/2 absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Rectangle" />
      <Dot13 />
    </div>
  );
}

function Dot14() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#c54600] left-1/2 overflow-clip rounded-[100px] size-[24px] top-0" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function MarkerTextField1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[48px] left-1/2 overflow-clip top-[calc(50%-52px)] w-[24px]" data-name="Marker: text field">
      <div className="-translate-x-1/2 absolute bg-[#c54600] bottom-0 left-[calc(50%+0.5px)] top-0 w-px" data-name="Rectangle" />
      <Dot14 />
    </div>
  );
}

function Dot15() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c54600] overflow-clip right-0 rounded-[100px] size-[24px] top-1/2" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function MarkerStateLayer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%+129px)] overflow-clip top-1/2 w-[48px]" data-name="Marker: state-layer">
      <div className="-translate-y-1/2 absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Rectangle" />
      <Dot15 />
    </div>
  );
}

function Dot16() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#c54600] left-1/2 overflow-clip rounded-[100px] size-[24px] top-0" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function MarkerInputText() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[66px] left-[calc(50%-69.5px)] overflow-clip top-[calc(50%-43px)] w-[24px]" data-name="Marker: input-text">
      <div className="-translate-x-1/2 absolute bg-[#c54600] bottom-0 left-[calc(50%+0.5px)] top-0 w-px" data-name="Rectangle" />
      <Dot16 />
    </div>
  );
}

function Dot17() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function MarkerLabelText1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%-123px)] overflow-clip top-[calc(50%-28px)] w-[60px]" data-name="Marker: label-text">
      <div className="-translate-y-1/2 absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Rectangle" />
      <Dot17 />
    </div>
  );
}

function Dot18() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c54600] overflow-clip right-0 rounded-[100px] size-[24px] top-1/2" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">6</p>
      </div>
    </div>
  );
}

function MarkerLabelText2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%+48.5px)] overflow-clip top-[calc(50%-28px)] w-[209px]" data-name="Marker: label-text">
      <div className="-translate-y-1/2 absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Rectangle" />
      <Dot18 />
    </div>
  );
}

function Dot19() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#c54600] left-1/2 overflow-clip rounded-[100px] size-[24px] top-0" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function MarkerTrailingIcon() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[52px] left-[calc(50%+81px)] overflow-clip top-[calc(50%-50px)] w-[24px]" data-name="Marker: trailing-icon">
      <div className="-translate-x-1/2 absolute bg-[#c54600] bottom-0 left-[calc(50%+0.5px)] top-0 w-px" data-name="Rectangle" />
      <Dot19 />
    </div>
  );
}

function Dot20() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">8</p>
      </div>
    </div>
  );
}

function MarkerSupportingText() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%-129px)] overflow-clip top-[calc(50%+38px)] w-[48px]" data-name="Marker: supporting-text">
      <div className="-translate-y-1/2 absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Rectangle" />
      <Dot20 />
    </div>
  );
}

function Dot21() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c54600] overflow-clip right-0 rounded-[100px] size-[24px] top-1/2" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">9</p>
      </div>
    </div>
  );
}

function MarkerSupportingText1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%+121px)] overflow-clip top-[calc(50%+40px)] w-[64px]" data-name="Marker: supporting-text">
      <div className="-translate-y-1/2 absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Rectangle" />
      <Dot21 />
    </div>
  );
}

function Artwork12() {
  return (
    <div className="bg-[#f2f2f2] h-[256px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField />
        <SupportingText />
      </div>
      <MarkerTextField />
      <MarkerTextField1 />
      <MarkerStateLayer />
      <MarkerInputText />
      <MarkerLabelText1 />
      <MarkerLabelText2 />
      <MarkerTrailingIcon />
      <MarkerSupportingText />
      <MarkerSupportingText1 />
    </div>
  );
}

function Exhibit12() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content12 />
      <Artwork12 />
    </div>
  );
}

function Anatomy1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Anatomy">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">Anatomy</p>
          <Exhibit12 />
        </div>
      </div>
    </div>
  );
}

function Label33() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">outlined (default)</p>
    </div>
  );
}

function Option10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label33 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Option10 />
    </div>
  );
}

function InputText1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText1() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText1 />
      <LabelText1 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer3 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content15 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer2 />
    </div>
  );
}

function SupportingText1() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork13() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField1 />
        <SupportingText1 />
      </div>
    </div>
  );
}

function Exhibit13() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content14 />
      <Artwork13 />
    </div>
  );
}

function Style() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="Style">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">Style</p>
      <Exhibit13 />
    </div>
  );
}

function Label34() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">enabled (default)</p>
    </div>
  );
}

function Option11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label34 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label35() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame23 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">text field</p>
    </div>
  );
}

function Component36() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/outline</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border color :</p>
      </div>
      <Component36 />
    </div>
  );
}

function Component37() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Attribute35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border weight :</p>
      </div>
      <Component37 />
    </div>
  );
}

function Component38() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border radius :</p>
      </div>
      <Component38 />
    </div>
  );
}

function Element23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label35 />
      <Attribute34 />
      <Attribute35 />
      <Attribute36 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label36() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame24 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">state-layer</p>
    </div>
  );
}

function Component39() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Top left radius :</p>
      </div>
      <Component39 />
    </div>
  );
}

function Component40() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Top right radius :</p>
      </div>
      <Component40 />
    </div>
  );
}

function Element24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label36 />
      <Attribute37 />
      <Attribute38 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label37() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame25 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">input-text</p>
    </div>
  );
}

function Component41() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">100%</p>
      </div>
    </div>
  );
}

function Attribute39() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Opacity :</p>
      </div>
      <Component41 />
    </div>
  );
}

function Element25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label37 />
      <Attribute39 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label38() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame26 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component42() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/on-surface-variant</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component42 />
    </div>
  );
}

function Component43() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">100%</p>
      </div>
    </div>
  );
}

function Attribute41() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Opacity :</p>
      </div>
      <Component43 />
    </div>
  );
}

function Element26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label38 />
      <Attribute40 />
      <Attribute41 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label39() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame27 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">trailing-icon</p>
    </div>
  );
}

function Component44() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Icons/cancel_24px</p>
      </div>
    </div>
  );
}

function Attribute42() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Icon :</p>
      </div>
      <Component44 />
    </div>
  );
}

function Element27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label39 />
      <Attribute42 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label40() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame28 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">supporting-text</p>
    </div>
  );
}

function Component45() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">100%</p>
      </div>
    </div>
  );
}

function Attribute43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Opacity :</p>
      </div>
      <Component45 />
    </div>
  );
}

function Element28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label40 />
      <Attribute43 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label41() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame29 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">supporting-text</p>
    </div>
  );
}

function Component46() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/on-surface-variant</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute44() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component46 />
    </div>
  );
}

function Element29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label41 />
      <Attribute44 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Content">
      <Option11 />
      <Element23 />
      <Element24 />
      <Element25 />
      <Element26 />
      <Element27 />
      <Element28 />
      <Element29 />
    </div>
  );
}

function InputText2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText2() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText2 />
      <LabelText2 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer5 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content17 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField2() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer4 />
    </div>
  );
}

function SupportingText2() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork14() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField2 />
        <SupportingText2 />
      </div>
    </div>
  );
}

function Exhibit14() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content16 />
      <Artwork14 />
    </div>
  );
}

function Label42() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">hovered</p>
    </div>
  );
}

function Option12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label42 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label43() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame30 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">text field</p>
    </div>
  );
}

function Component47() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/on-surface</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border color :</p>
      </div>
      <Component47 />
    </div>
  );
}

function Component48() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute46() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border radius :</p>
      </div>
      <Component48 />
    </div>
  );
}

function Element30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label43 />
      <Attribute45 />
      <Attribute46 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label44() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame31 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component49() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/on-surface</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component49 />
    </div>
  );
}

function Element31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label44 />
      <Attribute47 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label45() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame32 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">trailing-icon</p>
    </div>
  );
}

function Component50() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Icons/cancel_24px</p>
      </div>
    </div>
  );
}

function Attribute48() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Icon :</p>
      </div>
      <Component50 />
    </div>
  );
}

function Element32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label45 />
      <Attribute48 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Option12 />
      <Element30 />
      <Element31 />
      <Element32 />
    </div>
  );
}

function InputText3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText3() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#2d1600] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText3 />
      <LabelText3 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer7 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content19 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField3() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#2d1600] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer6 />
    </div>
  );
}

function SupportingText3() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork15() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField3 />
        <SupportingText3 />
      </div>
    </div>
  );
}

function Exhibit15() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content18 />
      <Artwork15 />
    </div>
  );
}

function Label46() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">focused</p>
    </div>
  );
}

function Option13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label46 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label47() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame33 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">text field</p>
    </div>
  );
}

function Component51() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/primary</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute49() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border color :</p>
      </div>
      <Component51 />
    </div>
  );
}

function Component52() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Attribute50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border weight :</p>
      </div>
      <Component52 />
    </div>
  );
}

function Component53() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute51() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border radius :</p>
      </div>
      <Component53 />
    </div>
  );
}

function Element33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label47 />
      <Attribute49 />
      <Attribute50 />
      <Attribute51 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label48() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame34 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component54() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/primary</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute52() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component54 />
    </div>
  );
}

function Element34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label48 />
      <Attribute52 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label49() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame35 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">trailing-icon</p>
    </div>
  );
}

function Component55() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Icons/cancel_24px</p>
      </div>
    </div>
  );
}

function Attribute53() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Icon :</p>
      </div>
      <Component55 />
    </div>
  );
}

function Element35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label49 />
      <Attribute53 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p16909200} id="VECTOR" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label50() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame36 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Caret</p>
    </div>
  );
}

function Component56() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/primary</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute54() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border color :</p>
      </div>
      <Component56 />
    </div>
  );
}

function Element36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label50 />
      <Attribute54 />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Option13 />
      <Element33 />
      <Element34 />
      <Element35 />
      <Element36 />
    </div>
  );
}

function InputText4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
      <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
        <div className="absolute inset-[-3.13%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17">
            <path d="M0.5 0.5V16.5" id="Caret" stroke="var(--stroke-0, #A73A00)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LabelText4() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a73a00] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText4 />
      <LabelText4 />
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer9 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content21 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField4() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border-2 border-[#a73a00] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer8 />
    </div>
  );
}

function SupportingText4() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork16() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField4 />
        <SupportingText4 />
      </div>
    </div>
  );
}

function Exhibit16() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content20 />
      <Artwork16 />
    </div>
  );
}

function Label51() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">error</p>
    </div>
  );
}

function Option14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label51 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label52() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame37 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">text field</p>
    </div>
  );
}

function Component57() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/error</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute55() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border color :</p>
      </div>
      <Component57 />
    </div>
  );
}

function Component58() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Attribute56() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border weight :</p>
      </div>
      <Component58 />
    </div>
  );
}

function Component59() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute57() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border radius :</p>
      </div>
      <Component59 />
    </div>
  );
}

function Element37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label52 />
      <Attribute55 />
      <Attribute56 />
      <Attribute57 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label53() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame38 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component60() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/error</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute58() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component60 />
    </div>
  );
}

function Element38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label53 />
      <Attribute58 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label54() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame39 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">trailing-icon</p>
    </div>
  );
}

function Component61() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Icons/error_24px</p>
      </div>
    </div>
  );
}

function Attribute59() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Icon :</p>
      </div>
      <Component61 />
    </div>
  );
}

function Element39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label54 />
      <Attribute59 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label55() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame40 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">supporting-text</p>
    </div>
  );
}

function Component62() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/error</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute60() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component62 />
    </div>
  );
}

function Element40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label55 />
      <Attribute60 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p16909200} id="VECTOR" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label56() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame41 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Caret</p>
    </div>
  );
}

function Component63() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/error</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute61() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border color :</p>
      </div>
      <Component63 />
    </div>
  );
}

function Element41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label56 />
      <Attribute61 />
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Option14 />
      <Element37 />
      <Element38 />
      <Element39 />
      <Element40 />
      <Element41 />
    </div>
  );
}

function InputText5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
      <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
        <div className="absolute inset-[-3.13%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17">
            <path d="M0.5 0.5V16.5" id="Caret" stroke="var(--stroke-0, #BA1A1A)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LabelText5() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ba1a1a] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText5 />
      <LabelText5 />
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/error_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p35a78d70} fill="var(--fill-0, #BA1A1A)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer11 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content23 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField5() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border-2 border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer10 />
    </div>
  );
}

function SupportingText5() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#ba1a1a] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork17() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField5 />
        <SupportingText5 />
      </div>
    </div>
  );
}

function Exhibit17() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content22 />
      <Artwork17 />
    </div>
  );
}

function Label57() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">disabled</p>
    </div>
  );
}

function Option15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label57 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label58() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame42 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">text field</p>
    </div>
  );
}

function Component64() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute62() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Top left radius :</p>
      </div>
      <Component64 />
    </div>
  );
}

function Component65() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute63() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Top right radius :</p>
      </div>
      <Component65 />
    </div>
  );
}

function Element42() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label58 />
      <Attribute62 />
      <Attribute63 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label59() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame43 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">state-layer</p>
    </div>
  );
}

function Component66() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">M3/state-layers/light/outline/opacity-0.12</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute64() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border color :</p>
      </div>
      <Component66 />
    </div>
  );
}

function Component67() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Attribute65() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border weight :</p>
      </div>
      <Component67 />
    </div>
  );
}

function Component68() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute66() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border radius :</p>
      </div>
      <Component68 />
    </div>
  );
}

function Element43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label59 />
      <Attribute64 />
      <Attribute65 />
      <Attribute66 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label60() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame44 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">input-text</p>
    </div>
  );
}

function Component69() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">38%</p>
      </div>
    </div>
  );
}

function Attribute67() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Opacity :</p>
      </div>
      <Component69 />
    </div>
  );
}

function Element44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label60 />
      <Attribute67 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label61() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame45 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component70() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/on-surface</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute68() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component70 />
    </div>
  );
}

function Component71() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">38%</p>
      </div>
    </div>
  );
}

function Attribute69() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Opacity :</p>
      </div>
      <Component71 />
    </div>
  );
}

function Element45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label61 />
      <Attribute68 />
      <Attribute69 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label62() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame46 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">trailing-icon</p>
    </div>
  );
}

function Component72() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Icons/cancel_24px</p>
      </div>
    </div>
  );
}

function Attribute70() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Icon :</p>
      </div>
      <Component72 />
    </div>
  );
}

function Element46() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label62 />
      <Attribute70 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label63() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame47 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">supporting-text</p>
    </div>
  );
}

function Component73() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">38%</p>
      </div>
    </div>
  );
}

function Attribute71() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Opacity :</p>
      </div>
      <Component73 />
    </div>
  );
}

function Element47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label63 />
      <Attribute71 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label64() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame48 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">supporting-text</p>
    </div>
  );
}

function Component74() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/on-surface</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute72() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text color :</p>
      </div>
      <Component74 />
    </div>
  );
}

function Element48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label64 />
      <Attribute72 />
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Option15 />
      <Element42 />
      <Element43 />
      <Element44 />
      <Element45 />
      <Element46 />
      <Element47 />
      <Element48 />
    </div>
  );
}

function InputText6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic opacity-38 relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText6() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic opacity-38 relative shrink-0 text-[#2d1600] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText6 />
      <LabelText6 />
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #2D1600)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer13 />
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="state-layer">
      <div aria-hidden="true" className="absolute border border-[rgba(121,116,126,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content25 />
          <div className="content-stretch flex flex-col items-center justify-center opacity-38 relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField6() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="text field">
      <StateLayer12 />
    </div>
  );
}

function SupportingText6() {
  return (
    <div className="opacity-38 relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2d1600] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork18() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField6 />
        <SupportingText6 />
      </div>
    </div>
  );
}

function Exhibit18() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content24 />
      <Artwork18 />
    </div>
  );
}

function State1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="State">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">State</p>
      <Exhibit14 />
      <Exhibit15 />
      <Exhibit16 />
      <Exhibit17 />
      <Exhibit18 />
    </div>
  );
}

function Label65() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">input-text (default)</p>
    </div>
  );
}

function Option16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label65 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label66() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame49 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component75() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/white</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute73() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Background color :</p>
      </div>
      <Component75 />
    </div>
  );
}

function Element49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label66 />
      <Attribute73 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label67() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame50 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component76() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Support Text/Caption</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute74() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text style :</p>
      </div>
      <Component76 />
    </div>
  );
}

function Element50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label67 />
      <Attribute74 />
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Option16 />
      <Element49 />
      <Element50 />
    </div>
  );
}

function InputText7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText7() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText7 />
      <LabelText7 />
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer15 />
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content27 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField7() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer14 />
    </div>
  );
}

function SupportingText7() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork19() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField7 />
        <SupportingText7 />
      </div>
    </div>
  );
}

function Exhibit19() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content26 />
      <Artwork19 />
    </div>
  );
}

function Label68() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Option17() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label68 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label69() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame51 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component77() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Paragraph/Body</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute75() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text style :</p>
      </div>
      <Component77 />
    </div>
  );
}

function Element51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label69 />
      <Attribute75 />
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Option17 />
      <Element51 />
    </div>
  );
}

function LabelText8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#53433e] text-[16px] tracking-[-0.32px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <LabelText8 />
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer17 />
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content29 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField8() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer16 />
    </div>
  );
}

function SupportingText8() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork20() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField8 />
        <SupportingText8 />
      </div>
    </div>
  );
}

function Exhibit20() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content28 />
      <Artwork20 />
    </div>
  );
}

function Label70() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">placeholder-text</p>
    </div>
  );
}

function Option18() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label70 />
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Option18 />
    </div>
  );
}

function PlaceholderText() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="placeholder-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#53433e] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Placeholder</p>
      </div>
    </div>
  );
}

function LabelText9() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <PlaceholderText />
      <LabelText9 />
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer19 />
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content31 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField9() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer18 />
    </div>
  );
}

function SupportingText9() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork21() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField9 />
        <SupportingText9 />
      </div>
    </div>
  );
}

function Exhibit21() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content30 />
      <Artwork21 />
    </div>
  );
}

function TextConfigurations() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="Text configurations">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">Text configurations</p>
      <Exhibit19 />
      <Exhibit20 />
      <Exhibit21 />
    </div>
  );
}

function Label71() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">false (default)</p>
    </div>
  );
}

function Option19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label71 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label72() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame52 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component78() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Support Text/Caption</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute76() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text style :</p>
      </div>
      <Component78 />
    </div>
  );
}

function Element52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label72 />
      <Attribute76 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label73() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame53 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">supporting-text</p>
    </div>
  );
}

function Component79() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Support Text/Caption</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute77() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text style :</p>
      </div>
      <Component79 />
    </div>
  );
}

function Element53() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label73 />
      <Attribute77 />
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Option19 />
      <Element52 />
      <Element53 />
    </div>
  );
}

function InputText8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText10() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText8 />
      <LabelText10 />
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer21 />
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content33 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField10() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer20 />
    </div>
  );
}

function SupportingText10() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork22() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField10 />
        <SupportingText10 />
      </div>
    </div>
  );
}

function Exhibit22() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content32 />
      <Artwork22 />
    </div>
  );
}

function Label74() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">true</p>
    </div>
  );
}

function Option20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label74 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label75() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame54 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component80() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">M3/body/small</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute78() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text style :</p>
      </div>
      <Component80 />
    </div>
  );
}

function Element54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label75 />
      <Attribute78 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3b30db80} id="TEXT" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label76() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame55 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">supporting-text</p>
    </div>
  );
}

function Component81() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">M3/body/small</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute79() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Text style :</p>
      </div>
      <Component81 />
    </div>
  );
}

function Element55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label76 />
      <Attribute79 />
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Option20 />
      <Element54 />
      <Element55 />
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/search_24px">
        <div className="absolute inset-[12.5%_14.62%_14.62%_12.5%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.49 17.49">
            <path clipRule="evenodd" d={svgPaths.p12600800} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer23 />
    </div>
  );
}

function InputText9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText11() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-36px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#53433e] text-[12px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Label
      </p>
    </div>
  );
}

function Content35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText9 />
      <LabelText11 />
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer24 />
    </div>
  );
}

function StateLayer22() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="leading-icon">
        <Container11 />
      </div>
      <Content35 />
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
        <Container12 />
      </div>
    </div>
  );
}

function TextField11() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer22 />
    </div>
  );
}

function SupportingText11() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#53433e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Supporting text
        </p>
      </div>
    </div>
  );
}

function Artwork23() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField11 />
        <SupportingText11 />
      </div>
    </div>
  );
}

function Exhibit23() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content34 />
      <Artwork23 />
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="Leading icon">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">Leading icon</p>
      <Exhibit22 />
      <Exhibit23 />
    </div>
  );
}

function Label77() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">True (default)</p>
    </div>
  );
}

function Option21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label77 />
    </div>
  );
}

function Content36() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Option21 />
    </div>
  );
}

function InputText10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText12() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText10 />
      <LabelText12 />
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer26 />
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content37 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container13 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField12() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer25 />
    </div>
  );
}

function SupportingText12() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork24() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField12 />
        <SupportingText12 />
      </div>
    </div>
  );
}

function Exhibit24() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content36 />
      <Artwork24 />
    </div>
  );
}

function Label78() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">False</p>
    </div>
  );
}

function Option22() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label78 />
    </div>
  );
}

function Content38() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Option22 />
    </div>
  );
}

function InputText11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText13() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText11 />
      <LabelText13 />
    </div>
  );
}

function StateLayer27() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[8px] relative w-full">
          <Content39 />
        </div>
      </div>
    </div>
  );
}

function TextField13() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer27 />
    </div>
  );
}

function SupportingText13() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork25() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField13 />
        <SupportingText13 />
      </div>
    </div>
  );
}

function Exhibit25() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content38 />
      <Artwork25 />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="Trailing icon">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">Trailing icon</p>
      <Exhibit24 />
      <Exhibit25 />
    </div>
  );
}

function Component82() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Boolean</p>
      </div>
    </div>
  );
}

function Attribute80() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Property type :</p>
      </div>
      <Component82 />
    </div>
  );
}

function Component83() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">true</p>
      </div>
    </div>
  );
}

function Attribute81() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Default :</p>
      </div>
      <Component83 />
    </div>
  );
}

function Component84() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">{` `}</p>
      </div>
    </div>
  );
}

function Attribute82() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Associated layers :</p>
      </div>
      <Component84 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label79() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame56 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">supporting-text</p>
    </div>
  );
}

function Element56() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Element">
      <Label79 />
    </div>
  );
}

function Content40() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Attribute80 />
      <Attribute81 />
      <Attribute82 />
      <Element56 />
    </div>
  );
}

function InputText12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText14() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText12 />
      <LabelText14 />
    </div>
  );
}

function StateLayer29() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer29 />
    </div>
  );
}

function StateLayer28() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content41 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField14() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer28 />
    </div>
  );
}

function SupportingText14() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function Artwork26() {
  return (
    <div className="bg-[#f2f2f2] h-[106px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField14 />
        <SupportingText14 />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute border border-[#0d69d4] border-solid h-[20px] left-1/2 top-[calc(50%+38px)] w-[210px]" data-name="Overlay: supporting-text" />
    </div>
  );
}

function Exhibit26() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content40 />
      <Artwork26 />
    </div>
  );
}

function ShowSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="Show supporting text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">Show supporting text</p>
      <Exhibit26 />
    </div>
  );
}

function Properties1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Properties">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">Properties</p>
          <Style />
          <State1 />
          <TextConfigurations />
          <LeadingIcon />
          <TrailingIcon />
          <ShowSupportingText />
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label80() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame57 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">text-field</p>
    </div>
  );
}

function Component85() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Vertical</p>
      </div>
    </div>
  );
}

function Attribute83() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Direction :</p>
      </div>
      <Component85 />
    </div>
  );
}

function Component86() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Top left</p>
      </div>
    </div>
  );
}

function Attribute84() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Alignment :</p>
      </div>
      <Component86 />
    </div>
  );
}

function Component87() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Fixed</p>
      </div>
    </div>
  );
}

function Attribute85() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Vertical resizing :</p>
      </div>
      <Component87 />
    </div>
  );
}

function Component88() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Fixed</p>
      </div>
    </div>
  );
}

function Attribute86() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Horizontal resizing :</p>
      </div>
      <Component88 />
    </div>
  );
}

function Element57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label80 />
      <Attribute83 />
      <Attribute84 />
      <Attribute85 />
      <Attribute86 />
    </div>
  );
}

function Elements1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Elements">
      <Element57 />
    </div>
  );
}

function Content42() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Elements1 />
    </div>
  );
}

function InputText13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText15() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText13 />
      <LabelText15 />
    </div>
  );
}

function StateLayer31() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer31 />
    </div>
  );
}

function StateLayer30() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content43 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField15() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer30 />
    </div>
  );
}

function SupportingText15() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function InputText14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText16() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText14 />
      <LabelText16 />
    </div>
  );
}

function StateLayer33() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer33 />
    </div>
  );
}

function StateLayer32() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content44 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container16 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField16() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer32 />
    </div>
  );
}

function SupportingText16() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function DirectionArrow1() {
  return (
    <div className="relative size-[16px]" data-name="Direction arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5294)" id="Direction arrow">
          <path d={svgPaths.p31f6a500} fill="var(--stroke-0, #6B6B6B)" id="Line 1" />
        </g>
        <defs>
          <clipPath id="clip0_3_5294">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ElementResizing2() {
  return (
    <div className="h-[16px] relative w-[56px]" data-name="Element resizing">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 16">
        <g id="Element resizing">
          <line id="Line" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="square" strokeWidth="1.5" x1="0.75" x2="55.25" y1="7.75" y2="7.75" />
          <line id="Edge 2" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="0.75" y1="2.75" y2="13.25" />
          <line id="Edge 1" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="round" strokeWidth="1.5" x1="55.25" x2="55.25" y1="13.25" y2="2.75" />
        </g>
      </svg>
    </div>
  );
}

function ElementResizing3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-[calc(50%-76px)] w-[210px]" data-name="Element resizing">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 16">
        <g id="Element resizing">
          <line id="Line" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="square" strokeWidth="1.5" x1="0.75" x2="209.25" y1="7.75" y2="7.75" />
          <line id="Edge 2" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="0.75" y1="2.75" y2="13.25" />
          <line id="Edge 1" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="round" strokeWidth="1.5" x1="209.25" x2="209.25" y1="13.25" y2="2.75" />
        </g>
      </svg>
    </div>
  );
}

function ItemSpacing() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%+29px)] w-[226px]" data-name="ITEM SPACING">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
          <g id="ITEM SPACING">
            <line id="Line 1" stroke="var(--stroke-0, #C54600)" x2="226" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component89() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 7.36396">
            <path d={svgPaths.p187a9b40} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 7.36396">
            <path d={svgPaths.p187a9b40} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChildElementResizing1() {
  return (
    <div className="h-[16px] overflow-clip relative w-[56px]" data-name="Child element resizing">
      <Component89 />
    </div>
  );
}

function Component90() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 7.36396">
            <path d={svgPaths.pcbde400} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 7.36396">
            <path d={svgPaths.pcbde400} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChildElementResizing2() {
  return (
    <div className="h-[16px] overflow-clip relative w-[20px]" data-name="Child element resizing">
      <Component90 />
    </div>
  );
}

function Artwork27() {
  return (
    <div className="bg-[#f2f2f2] h-[204px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 opacity-20 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField15 />
        <SupportingText15 />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 opacity-20 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="Element annotated">
        <TextField16 />
        <SupportingText16 />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[56px] left-1/2 top-1/2 w-[210px]" data-name="Element outline">
        <div aria-hidden="true" className="absolute border border-[#0d69d4] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-153px)] size-[16px] top-[calc(50%-60px)]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <DirectionArrow1 />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.014px] left-[calc(50%-153px)] top-[calc(50%-75.99px)] w-[16px]" data-name="Alignment: Top left">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.014">
          <path clipRule="evenodd" d={svgPaths.p500d900} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Alignment: Top left" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[56px] items-center justify-center left-[calc(50%-153px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ElementResizing2 />
        </div>
      </div>
      <ElementResizing3 />
      <ItemSpacing />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[56px] items-center justify-center left-[calc(50%-113px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ChildElementResizing1 />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[20px] items-center justify-center left-[calc(50%-113px)] top-[calc(50%+38px)] w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ChildElementResizing2 />
        </div>
      </div>
    </div>
  );
}

function Exhibit27() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content42 />
      <Artwork27 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label81() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame58 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">text field</p>
    </div>
  );
}

function Component91() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Vertical</p>
      </div>
    </div>
  );
}

function Attribute87() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Direction :</p>
      </div>
      <Component91 />
    </div>
  );
}

function Component92() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Top left</p>
      </div>
    </div>
  );
}

function Attribute88() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Alignment :</p>
      </div>
      <Component92 />
    </div>
  );
}

function Component93() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute89() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Vertical resizing :</p>
      </div>
      <Component93 />
    </div>
  );
}

function Component94() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Fill</p>
      </div>
    </div>
  );
}

function Attribute90() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Horizontal resizing :</p>
      </div>
      <Component94 />
    </div>
  );
}

function Component95() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">10</p>
      </div>
    </div>
  );
}

function Attribute91() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Item spacing:</p>
      </div>
      <Component95 />
    </div>
  );
}

function Element58() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label81 />
      <Attribute87 />
      <Attribute88 />
      <Attribute89 />
      <Attribute90 />
      <Attribute91 />
    </div>
  );
}

function Elements2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Elements">
      <Element58 />
    </div>
  );
}

function Content45() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Elements2 />
    </div>
  );
}

function InputText15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText17() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText15 />
      <LabelText17 />
    </div>
  );
}

function StateLayer35() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer35 />
    </div>
  );
}

function StateLayer34() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content46 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container17 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField17() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer34 />
    </div>
  );
}

function SupportingText17() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function InputText16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText18() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText16 />
      <LabelText18 />
    </div>
  );
}

function StateLayer37() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer37 />
    </div>
  );
}

function StateLayer36() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content47 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container18 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ElementAnnotated() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 rounded-[4px] top-1/2 w-[210px]" data-name="Element annotated">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer36 />
    </div>
  );
}

function DirectionArrow2() {
  return (
    <div className="relative size-[16px]" data-name="Direction arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5294)" id="Direction arrow">
          <path d={svgPaths.p31f6a500} fill="var(--stroke-0, #6B6B6B)" id="Line 1" />
        </g>
        <defs>
          <clipPath id="clip0_3_5294">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component96() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 11.0459">
            <path d={svgPaths.p25997470} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 11.0459">
            <path d={svgPaths.p25997470} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing4() {
  return (
    <div className="h-[16px] overflow-clip relative w-[56px]" data-name="Element resizing">
      <Component96 />
    </div>
  );
}

function ElementResizing5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-[calc(50%-76px)] w-[210px]" data-name="Element resizing">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 16">
        <g id="Element resizing">
          <path d={svgPaths.p1be751f0} fill="var(--stroke-0, #0D69D4)" id="Line" />
        </g>
      </svg>
    </div>
  );
}

function Component97() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 7.36396">
            <path d={svgPaths.p187a9b40} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 7.36396">
            <path d={svgPaths.p187a9b40} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChildElementResizing3() {
  return (
    <div className="h-[16px] overflow-clip relative w-[56px]" data-name="Child element resizing">
      <Component97 />
    </div>
  );
}

function Artwork28() {
  return (
    <div className="bg-[#f2f2f2] h-[204px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 opacity-20 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField17 />
        <SupportingText17 />
      </div>
      <ElementAnnotated />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[56px] left-1/2 top-1/2 w-[210px]" data-name="Element outline">
        <div aria-hidden="true" className="absolute border border-[#0d69d4] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-153px)] size-[16px] top-[calc(50%-60px)]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <DirectionArrow2 />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.014px] left-[calc(50%-153px)] top-[calc(50%-75.99px)] w-[16px]" data-name="Alignment: Top left">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.014">
          <path clipRule="evenodd" d={svgPaths.p500d900} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Alignment: Top left" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[56px] items-center justify-center left-[calc(50%-153px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ElementResizing4 />
        </div>
      </div>
      <ElementResizing5 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[56px] items-center justify-center left-[calc(50%-113px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ChildElementResizing3 />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(13,105,212,0.2)] h-[56px] left-1/2 top-1/2 w-[210px]" data-name="Child element overlay" />
    </div>
  );
}

function Exhibit28() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content45 />
      <Artwork28 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label82() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame59 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">state-layer</p>
    </div>
  );
}

function Component98() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Horizontal</p>
      </div>
    </div>
  );
}

function Attribute92() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Direction :</p>
      </div>
      <Component98 />
    </div>
  );
}

function Component99() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Middle left</p>
      </div>
    </div>
  );
}

function Attribute93() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Alignment :</p>
      </div>
      <Component99 />
    </div>
  );
}

function Component100() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute94() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Vertical resizing :</p>
      </div>
      <Component100 />
    </div>
  );
}

function Component101() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Fill</p>
      </div>
    </div>
  );
}

function Attribute95() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Horizontal resizing :</p>
      </div>
      <Component101 />
    </div>
  );
}

function Component102() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute96() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Padding top:</p>
      </div>
      <Component102 />
    </div>
  );
}

function Component103() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute97() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Padding bottom:</p>
      </div>
      <Component103 />
    </div>
  );
}

function Component104() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">16</p>
      </div>
    </div>
  );
}

function Attribute98() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Padding left:</p>
      </div>
      <Component104 />
    </div>
  );
}

function Element59() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label82 />
      <Attribute92 />
      <Attribute93 />
      <Attribute94 />
      <Attribute95 />
      <Attribute96 />
      <Attribute97 />
      <Attribute98 />
    </div>
  );
}

function Elements3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Elements">
      <Element59 />
    </div>
  );
}

function Content48() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Elements3 />
    </div>
  );
}

function InputText17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText19() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText17 />
      <LabelText19 />
    </div>
  );
}

function StateLayer39() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer39 />
    </div>
  );
}

function StateLayer38() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content49 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container19 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField18() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer38 />
    </div>
  );
}

function SupportingText18() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function InputText18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText20() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText18 />
      <LabelText20 />
    </div>
  );
}

function StateLayer40() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer40 />
    </div>
  );
}

function ElementAnnotated1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-1/2 pl-[16px] py-[4px] rounded-tl-[4px] rounded-tr-[4px] top-1/2 w-[210px]" data-name="Element annotated">
      <Content50 />
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
        <Container20 />
      </div>
    </div>
  );
}

function DirectionArrow3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-137px)] size-[16px] top-[calc(50%-76px)]" data-name="Direction arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5232)" id="Direction arrow">
          <path d={svgPaths.p31f6a500} fill="var(--stroke-0, #6B6B6B)" id="Line 1" />
        </g>
        <defs>
          <clipPath id="clip0_3_5232">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component105() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 11.0459">
            <path d={svgPaths.p25997470} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 11.0459">
            <path d={svgPaths.p25997470} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing6() {
  return (
    <div className="h-[16px] overflow-clip relative w-[56px]" data-name="Element resizing">
      <Component105 />
    </div>
  );
}

function ElementResizing7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-[calc(50%-76px)] w-[210px]" data-name="Element resizing">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 16">
        <g id="Element resizing">
          <path d={svgPaths.p1be751f0} fill="var(--stroke-0, #0D69D4)" id="Line" />
        </g>
      </svg>
    </div>
  );
}

function ItemSpacing1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[72px] left-[calc(50%+57px)] top-[calc(50%-8px)] w-0" data-name="ITEM SPACING">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 72">
          <g id="ITEM SPACING">
            <line id="Line 1" stroke="var(--stroke-0, #C54600)" x1="0.5" x2="0.5" y2="72" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChildElementResizing4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%-16px)] top-[calc(50%-36px)] w-[146px]" data-name="Child element resizing">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 16">
        <g id="Child element resizing">
          <path d={svgPaths.p67d7300} fill="var(--stroke-0, #0D69D4)" id="Line" />
        </g>
      </svg>
    </div>
  );
}

function PaddingTop1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-14.5px)] top-[calc(50%-26.5px)]" data-name="PADDING TOP">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[4px] left-1/2 top-[calc(50%-26px)] w-[210px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%-27px)] w-[226px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="226" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%-24px)] w-[226px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="226" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-134px)] not-italic text-[#007d00] text-[12px] top-[calc(50%-34px)] whitespace-nowrap">4</p>
    </div>
  );
}

function PaddingBottom1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-14.5px)] top-[calc(50%+25.5px)]" data-name="PADDING BOTTOM">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[4px] left-1/2 top-[calc(50%+26px)] w-[210px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%+25px)] w-[226px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="226" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%+28px)] w-[226px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="226" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-134px)] not-italic text-[#007d00] text-[12px] top-[calc(50%+18px)] whitespace-nowrap">4</p>
    </div>
  );
}

function PaddingLeft1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-97px)] top-[calc(50%-16px)]" data-name="PADDING LEFT">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[48px] left-[calc(50%-97px)] top-1/2 w-[16px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[72px] items-center justify-center left-[calc(50%-105px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[72px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="72" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[72px] items-center justify-center left-[calc(50%-90px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[72px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="72" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-104px)] not-italic text-[#007d00] text-[12px] top-[calc(50%-60px)] whitespace-nowrap">16</p>
    </div>
  );
}

function Artwork29() {
  return (
    <div className="bg-[#f2f2f2] h-[204px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 opacity-20 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField18 />
        <SupportingText18 />
      </div>
      <ElementAnnotated1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[56px] left-1/2 top-1/2 w-[210px]" data-name="Element outline">
        <div aria-hidden="true" className="absolute border border-[#0d69d4] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <DirectionArrow3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.014px] left-[calc(50%-153px)] top-[calc(50%-75.99px)] w-[16px]" data-name="Alignment: Middle left">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.014">
          <path clipRule="evenodd" d={svgPaths.p42e1000} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Alignment: Middle left" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[56px] items-center justify-center left-[calc(50%-153px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ElementResizing6 />
        </div>
      </div>
      <ElementResizing7 />
      <ItemSpacing1 />
      <ChildElementResizing4 />
      <PaddingTop1 />
      <PaddingBottom1 />
      <PaddingLeft1 />
    </div>
  );
}

function Exhibit29() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content48 />
      <Artwork29 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label83() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame60 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">content</p>
    </div>
  );
}

function Component106() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Vertical</p>
      </div>
    </div>
  );
}

function Attribute99() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Direction :</p>
      </div>
      <Component106 />
    </div>
  );
}

function Component107() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Middle left</p>
      </div>
    </div>
  );
}

function Attribute100() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Alignment :</p>
      </div>
      <Component107 />
    </div>
  );
}

function Component108() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Fixed</p>
      </div>
    </div>
  );
}

function Attribute101() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Vertical resizing :</p>
      </div>
      <Component108 />
    </div>
  );
}

function Component109() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Fill</p>
      </div>
    </div>
  );
}

function Attribute102() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Horizontal resizing :</p>
      </div>
      <Component109 />
    </div>
  );
}

function Element60() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label83 />
      <Attribute99 />
      <Attribute100 />
      <Attribute101 />
      <Attribute102 />
    </div>
  );
}

function Elements4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Elements">
      <Element60 />
    </div>
  );
}

function Content51() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Elements4 />
    </div>
  );
}

function InputText19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText21() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText19 />
      <LabelText21 />
    </div>
  );
}

function StateLayer42() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer42 />
    </div>
  );
}

function StateLayer41() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content52 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container21 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField19() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer41 />
    </div>
  );
}

function SupportingText19() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function InputText20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText22() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function ElementAnnotated2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[40px] items-start justify-center left-[calc(50%-16px)] top-1/2 w-[146px]" data-name="Element annotated">
      <InputText20 />
      <LabelText22 />
    </div>
  );
}

function DirectionArrow4() {
  return (
    <div className="relative size-[16px]" data-name="Direction arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5294)" id="Direction arrow">
          <path d={svgPaths.p31f6a500} fill="var(--stroke-0, #6B6B6B)" id="Line 1" />
        </g>
        <defs>
          <clipPath id="clip0_3_5294">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ElementResizing8() {
  return (
    <div className="h-[16px] relative w-[40px]" data-name="Element resizing">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 16">
        <g id="Element resizing">
          <line id="Line" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="square" strokeWidth="1.5" x1="0.75" x2="39.25" y1="7.75" y2="7.75" />
          <line id="Edge 2" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="0.75" y1="2.75" y2="13.25" />
          <line id="Edge 1" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="round" strokeWidth="1.5" x1="39.25" x2="39.25" y1="13.25" y2="2.75" />
        </g>
      </svg>
    </div>
  );
}

function ElementResizing9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%-16px)] top-[calc(50%-68px)] w-[146px]" data-name="Element resizing">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 16">
        <g id="Element resizing">
          <path d={svgPaths.pa4e5b00} fill="var(--stroke-0, #0D69D4)" id="Line" />
        </g>
      </svg>
    </div>
  );
}

function Component110() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 7.36396">
            <path d={svgPaths.pcbde400} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 7.36396">
            <path d={svgPaths.pcbde400} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChildElementResizing5() {
  return (
    <div className="h-[16px] overflow-clip relative w-[20px]" data-name="Child element resizing">
      <Component110 />
    </div>
  );
}

function Artwork30() {
  return (
    <div className="bg-[#f2f2f2] h-[204px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 opacity-20 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField19 />
        <SupportingText19 />
      </div>
      <ElementAnnotated2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] left-[calc(50%-16px)] top-1/2 w-[146px]" data-name="Element outline">
        <div aria-hidden="true" className="absolute border border-[#0d69d4] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-137px)] size-[16px] top-[calc(50%-52px)]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <DirectionArrow4 />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.014px] left-[calc(50%-137px)] top-[calc(50%-67.99px)] w-[16px]" data-name="Alignment: Middle left">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.014">
          <path clipRule="evenodd" d={svgPaths.p42e1000} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Alignment: Middle left" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[40px] items-center justify-center left-[calc(50%-137px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ElementResizing8 />
        </div>
      </div>
      <ElementResizing9 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[20px] items-center justify-center left-[calc(50%-97px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ChildElementResizing5 />
        </div>
      </div>
    </div>
  );
}

function Exhibit30() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content51 />
      <Artwork30 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label84() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame61 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">input-text</p>
    </div>
  );
}

function Component111() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Horizontal</p>
      </div>
    </div>
  );
}

function Attribute103() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Direction :</p>
      </div>
      <Component111 />
    </div>
  );
}

function Component112() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Middle left</p>
      </div>
    </div>
  );
}

function Attribute104() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Alignment :</p>
      </div>
      <Component112 />
    </div>
  );
}

function Component113() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute105() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Vertical resizing :</p>
      </div>
      <Component113 />
    </div>
  );
}

function Component114() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute106() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Horizontal resizing :</p>
      </div>
      <Component114 />
    </div>
  );
}

function Element61() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label84 />
      <Attribute103 />
      <Attribute104 />
      <Attribute105 />
      <Attribute106 />
    </div>
  );
}

function Elements5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Elements">
      <Element61 />
    </div>
  );
}

function Content53() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Elements5 />
    </div>
  );
}

function InputText21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText23() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText21 />
      <LabelText23 />
    </div>
  );
}

function StateLayer44() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer44 />
    </div>
  );
}

function StateLayer43() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content54 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container22 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField20() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer43 />
    </div>
  );
}

function SupportingText20() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function ElementAnnotated3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-[calc(50%-69.5px)] top-1/2" data-name="Element annotated">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function DirectionArrow5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-121px)] size-[16px] top-[calc(50%-58px)]" data-name="Direction arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5232)" id="Direction arrow">
          <path d={svgPaths.p31f6a500} fill="var(--stroke-0, #6B6B6B)" id="Line 1" />
        </g>
        <defs>
          <clipPath id="clip0_3_5232">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component115() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 11.0459">
            <path d={svgPaths.p27158b00} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 11.0459">
            <path d={svgPaths.p27158b00} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing10() {
  return (
    <div className="h-[16px] overflow-clip relative w-[20px]" data-name="Element resizing">
      <Component115 />
    </div>
  );
}

function Component116() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 11.0459">
            <path d={svgPaths.p2ff86600} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 11.0459">
            <path d={svgPaths.p2ff86600} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%-69.5px)] overflow-clip top-[calc(50%-58px)] w-[39px]" data-name="Element resizing">
      <Component116 />
    </div>
  );
}

function Component117() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 7.36396">
            <path d={svgPaths.p3f763080} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 7.36396">
            <path d={svgPaths.p3f763080} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChildElementResizing6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%-69.5px)] overflow-clip top-[calc(50%-18px)] w-[39px]" data-name="Child element resizing">
      <Component117 />
    </div>
  );
}

function Artwork31() {
  return (
    <div className="bg-[#f2f2f2] h-[204px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 opacity-20 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField20 />
        <SupportingText20 />
      </div>
      <ElementAnnotated3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20px] left-[calc(50%-69.5px)] top-1/2 w-[39px]" data-name="Element outline">
        <div aria-hidden="true" className="absolute border border-[#0d69d4] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <DirectionArrow5 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.014px] left-[calc(50%-137px)] top-[calc(50%-57.99px)] w-[16px]" data-name="Alignment: Middle left">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.014">
          <path clipRule="evenodd" d={svgPaths.p42e1000} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Alignment: Middle left" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[20px] items-center justify-center left-[calc(50%-137px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ElementResizing10 />
        </div>
      </div>
      <ElementResizing11 />
      <ChildElementResizing6 />
    </div>
  );
}

function Exhibit31() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content53 />
      <Artwork31 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label85() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame62 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">label-text</p>
    </div>
  );
}

function Component118() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Horizontal</p>
      </div>
    </div>
  );
}

function Attribute107() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Direction :</p>
      </div>
      <Component118 />
    </div>
  );
}

function Component119() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Middle left</p>
      </div>
    </div>
  );
}

function Attribute108() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Alignment :</p>
      </div>
      <Component119 />
    </div>
  );
}

function Component120() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute109() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Vertical resizing :</p>
      </div>
      <Component120 />
    </div>
  );
}

function Component121() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute110() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Horizontal resizing :</p>
      </div>
      <Component121 />
    </div>
  );
}

function Component122() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute111() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Padding left:</p>
      </div>
      <Component122 />
    </div>
  );
}

function Component123() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute112() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Padding right:</p>
      </div>
      <Component123 />
    </div>
  );
}

function Element62() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label85 />
      <Attribute107 />
      <Attribute108 />
      <Attribute109 />
      <Attribute110 />
      <Attribute111 />
      <Attribute112 />
    </div>
  );
}

function Elements6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Elements">
      <Element62 />
    </div>
  );
}

function Content55() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Elements6 />
    </div>
  );
}

function InputText22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText24() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText22 />
      <LabelText24 />
    </div>
  );
}

function StateLayer46() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer46 />
    </div>
  );
}

function StateLayer45() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content56 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container23 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField21() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer45 />
    </div>
  );
}

function SupportingText21() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function ElementAnnotated4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex items-center left-[calc(50%-72.5px)] px-[4px] top-[calc(50%-28px)]" data-name="Element annotated">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function DirectionArrow6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-125px)] size-[16px] top-[calc(50%-84px)]" data-name="Direction arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5232)" id="Direction arrow">
          <path d={svgPaths.p31f6a500} fill="var(--stroke-0, #6B6B6B)" id="Line 1" />
        </g>
        <defs>
          <clipPath id="clip0_3_5232">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component124() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 11.0459">
            <path d={svgPaths.p38876600} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 11.0459">
            <path d={svgPaths.p38876600} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing12() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Element resizing">
      <Component124 />
    </div>
  );
}

function Component125() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 11.0459">
            <path d={svgPaths.pf0f8480} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 11.0459">
            <path d={svgPaths.pf0f8480} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing13() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%-72.5px)] overflow-clip top-[calc(50%-84px)] w-[41px]" data-name="Element resizing">
      <Component125 />
    </div>
  );
}

function Component126() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 7.36396">
            <path d={svgPaths.pbaa3400} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 7.36396">
            <path d={svgPaths.pbaa3400} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChildElementResizing7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%-72.5px)] overflow-clip top-[calc(50%-44px)] w-[33px]" data-name="Child element resizing">
      <Component126 />
    </div>
  );
}

function PaddingLeft2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-91px)] top-[calc(50%-44px)]" data-name="PADDING LEFT">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[16px] left-[calc(50%-91px)] top-[calc(50%-28px)] w-[4px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[32px] items-center justify-center left-[calc(50%-93px)] top-[calc(50%-36px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[32px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="32" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[32px] items-center justify-center left-[calc(50%-90px)] top-[calc(50%-36px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[32px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="32" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-95.5px)] not-italic text-[#007d00] text-[12px] top-[calc(50%-68px)] whitespace-nowrap">4</p>
    </div>
  );
}

function PaddingRight1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-54px)] top-[calc(50%-44px)]" data-name="PADDING RIGHT">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[16px] left-[calc(50%-54px)] top-[calc(50%-28px)] w-[4px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[32px] items-center justify-center left-[calc(50%-56px)] top-[calc(50%-36px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[32px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="32" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[32px] items-center justify-center left-[calc(50%-53px)] top-[calc(50%-36px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[32px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="32" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-58.5px)] not-italic text-[#007d00] text-[12px] top-[calc(50%-68px)] whitespace-nowrap">4</p>
    </div>
  );
}

function Artwork32() {
  return (
    <div className="bg-[#f2f2f2] h-[204px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 opacity-20 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField21 />
        <SupportingText21 />
      </div>
      <ElementAnnotated4 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%-72.5px)] top-[calc(50%-28px)] w-[41px]" data-name="Element outline">
        <div aria-hidden="true" className="absolute border border-[#0d69d4] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <DirectionArrow6 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.014px] left-[calc(50%-141px)] top-[calc(50%-83.99px)] w-[16px]" data-name="Alignment: Middle left">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.014">
          <path clipRule="evenodd" d={svgPaths.p42e1000} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Alignment: Middle left" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-141px)] size-[16px] top-[calc(50%-28px)]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ElementResizing12 />
        </div>
      </div>
      <ElementResizing13 />
      <ChildElementResizing7 />
      <PaddingLeft2 />
      <PaddingRight1 />
    </div>
  );
}

function Exhibit32() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content55 />
      <Artwork32 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label86() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame63 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">supporting-text</p>
    </div>
  );
}

function Component127() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Horizontal</p>
      </div>
    </div>
  );
}

function Attribute113() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Direction :</p>
      </div>
      <Component127 />
    </div>
  );
}

function Component128() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Top left</p>
      </div>
    </div>
  );
}

function Attribute114() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Alignment :</p>
      </div>
      <Component128 />
    </div>
  );
}

function Component129() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute115() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Vertical resizing :</p>
      </div>
      <Component129 />
    </div>
  );
}

function Component130() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Fill</p>
      </div>
    </div>
  );
}

function Attribute116() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Horizontal resizing :</p>
      </div>
      <Component130 />
    </div>
  );
}

function Component131() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">10</p>
      </div>
    </div>
  );
}

function Attribute117() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Item spacing:</p>
      </div>
      <Component131 />
    </div>
  );
}

function Component132() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Attribute118() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Padding top:</p>
      </div>
      <Component132 />
    </div>
  );
}

function Component133() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">16</p>
      </div>
    </div>
  );
}

function Attribute119() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Padding left:</p>
      </div>
      <Component133 />
    </div>
  );
}

function Component134() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">16</p>
      </div>
    </div>
  );
}

function Attribute120() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Padding right:</p>
      </div>
      <Component134 />
    </div>
  );
}

function Element63() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label86 />
      <Attribute113 />
      <Attribute114 />
      <Attribute115 />
      <Attribute116 />
      <Attribute117 />
      <Attribute118 />
      <Attribute119 />
      <Attribute120 />
    </div>
  );
}

function Elements7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Elements">
      <Element63 />
    </div>
  );
}

function Content57() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[344px]" data-name="Content">
      <Elements7 />
    </div>
  );
}

function InputText23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d1600] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[20px]">Input</p>
      </div>
    </div>
  );
}

function LabelText25() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] top-[-16px]" data-name="label-text">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#53433e] text-[12px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Content58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px relative" data-name="content">
      <InputText23 />
      <LabelText25 />
    </div>
  );
}

function StateLayer48() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icons/cancel_24px">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p2d220900} fill="var(--fill-0, #53433E)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer48 />
    </div>
  );
}

function StateLayer47() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[4px] relative w-full">
          <Content58 />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
            <Container24 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField22() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#85736d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer47 />
    </div>
  );
}

function SupportingText22() {
  return (
    <div className="relative shrink-0 w-full" data-name="supporting-text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
      </div>
    </div>
  );
}

function ElementAnnotated5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start left-1/2 pt-[4px] px-[16px] top-[calc(50%+38px)] w-[210px]" data-name="Element annotated">
      <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#53433e] text-[12px]">Supporting text</p>
    </div>
  );
}

function DirectionArrow7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-137px)] size-[16px] top-[calc(50%-20px)]" data-name="Direction arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5232)" id="Direction arrow">
          <path d={svgPaths.p31f6a500} fill="var(--stroke-0, #6B6B6B)" id="Line 1" />
        </g>
        <defs>
          <clipPath id="clip0_3_5232">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component135() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 11.0459">
            <path d={svgPaths.p27158b00} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 11.0459">
            <path d={svgPaths.p27158b00} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing14() {
  return (
    <div className="h-[16px] overflow-clip relative w-[20px]" data-name="Element resizing">
      <Component135 />
    </div>
  );
}

function ElementResizing15() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-[calc(50%-20px)] w-[210px]" data-name="Element resizing">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 16">
        <g id="Element resizing">
          <path d={svgPaths.p1be751f0} fill="var(--stroke-0, #0D69D4)" id="Line" />
        </g>
      </svg>
    </div>
  );
}

function ChildElementResizing8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-[calc(50%+20px)] w-[178px]" data-name="Child element resizing">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 16">
        <g id="Child element resizing">
          <path d={svgPaths.p3918000} fill="var(--stroke-0, #0D69D4)" id="Line" />
        </g>
      </svg>
    </div>
  );
}

function PaddingTop2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-14.5px)] top-[calc(50%+29.5px)]" data-name="PADDING TOP">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[4px] left-1/2 top-[calc(50%+30px)] w-[210px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%+29px)] w-[226px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="226" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%+32px)] w-[226px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="226" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-134px)] not-italic text-[#007d00] text-[12px] top-[calc(50%+22px)] whitespace-nowrap">4</p>
    </div>
  );
}

function PaddingLeft3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-97px)] top-[calc(50%+22px)]" data-name="PADDING LEFT">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] left-[calc(50%-97px)] size-[16px] top-[calc(50%+40px)]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[36px] items-center justify-center left-[calc(50%-105px)] top-[calc(50%+30px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[36px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="36" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[36px] items-center justify-center left-[calc(50%-90px)] top-[calc(50%+30px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[36px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="36" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-104px)] not-italic text-[#007d00] text-[12px] top-[calc(50%-4px)] whitespace-nowrap">16</p>
    </div>
  );
}

function PaddingRight2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+97px)] top-[calc(50%+22px)]" data-name="PADDING RIGHT">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] left-[calc(50%+97px)] size-[16px] top-[calc(50%+40px)]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[36px] items-center justify-center left-[calc(50%+89px)] top-[calc(50%+30px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[36px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="36" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[36px] items-center justify-center left-[calc(50%+104px)] top-[calc(50%+30px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[36px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="36" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+90px)] not-italic text-[#007d00] text-[12px] top-[calc(50%-4px)] whitespace-nowrap">16</p>
    </div>
  );
}

function Artwork33() {
  return (
    <div className="bg-[#f2f2f2] h-[204px] overflow-clip relative shrink-0 w-[610px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[56px] items-start left-1/2 opacity-20 rounded-tl-[8px] rounded-tr-[8px] top-1/2 w-[210px]" data-name="text-field">
        <TextField22 />
        <SupportingText22 />
      </div>
      <ElementAnnotated5 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20px] left-1/2 top-[calc(50%+38px)] w-[210px]" data-name="Element outline">
        <div aria-hidden="true" className="absolute border border-[#0d69d4] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <DirectionArrow7 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.014px] left-[calc(50%-153px)] top-[calc(50%-19.99px)] w-[16px]" data-name="Alignment: Top left">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.014">
          <path clipRule="evenodd" d={svgPaths.p500d900} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Alignment: Top left" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[20px] items-center justify-center left-[calc(50%-153px)] top-[calc(50%+38px)] w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ElementResizing14 />
        </div>
      </div>
      <ElementResizing15 />
      <ChildElementResizing8 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(13,105,212,0.2)] h-[16px] left-1/2 top-[calc(50%+40px)] w-[178px]" data-name="Child element overlay" />
      <PaddingTop2 />
      <PaddingLeft3 />
      <PaddingRight2 />
    </div>
  );
}

function Exhibit33() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content57 />
      <Artwork33 />
    </div>
  );
}

function Spacing1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="Spacing">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">Spacing</p>
      <Exhibit27 />
      <Exhibit28 />
      <Exhibit29 />
      <Exhibit30 />
      <Exhibit31 />
      <Exhibit32 />
      <Exhibit33 />
    </div>
  );
}

function LayoutAndSpacing1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout and spacing">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">Layout and spacing</p>
          <Spacing1 />
        </div>
      </div>
    </div>
  );
}

function Specification1() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[1146px]" data-name="Specification">
      <Name1 />
      <Anatomy1 />
      <Properties1 />
      <LayoutAndSpacing1 />
    </div>
  );
}

function Specs1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Specs">
      <Specification1 />
    </div>
  );
}

function Name2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[64px] text-black whitespace-nowrap">Radio Button</p>
        </div>
      </div>
    </div>
  );
}

function Dot22() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label87() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame64 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">container</p>
    </div>
  );
}

function Component136() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">100</p>
      </div>
    </div>
  );
}

function Attribute121() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border radius :</p>
      </div>
      <Component136 />
    </div>
  );
}

function Element64() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label87 />
      <Attribute121 />
    </div>
  );
}

function AnatomyItem11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot22 />
      <Element64 />
    </div>
  );
}

function Dot23() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label88() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame65 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">state-layer</p>
    </div>
  );
}

function Element65() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Element">
      <Label88 />
    </div>
  );
}

function AnatomyItem12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot23 />
      <Element65 />
    </div>
  );
}

function Dot24() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label89() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame66 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">icon</p>
    </div>
  );
}

function Component137() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Icons</p>
      </div>
    </div>
  );
}

function Attribute122() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Depends on :</p>
      </div>
      <Component137 />
    </div>
  );
}

function Element66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label89 />
      <Attribute122 />
    </div>
  );
}

function AnatomyItem13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot24 />
      <Element66 />
    </div>
  );
}

function Content59() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[362px]" data-name="Content">
      <AnatomyItem11 />
      <AnatomyItem12 />
      <AnatomyItem13 />
    </div>
  );
}

function StateLayer49() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#A73A00" />
              <path d={svgPaths.p240d7000} fill="#A73A00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer49 />
    </div>
  );
}

function Dot25() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function MarkerContainer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%-46px)] overflow-clip top-1/2 w-[52px]" data-name="Marker: container">
      <div className="-translate-y-1/2 absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Rectangle" />
      <Dot25 />
    </div>
  );
}

function Dot26() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#c54600] left-1/2 overflow-clip rounded-[100px] size-[24px] top-0" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function MarkerStateLayer1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[52px] left-1/2 overflow-clip top-[calc(50%-46px)] w-[24px]" data-name="Marker: state-layer">
      <div className="-translate-x-1/2 absolute bg-[#c54600] bottom-0 left-[calc(50%+0.5px)] top-0 w-px" data-name="Rectangle" />
      <Dot26 />
    </div>
  );
}

function Dot27() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c54600] overflow-clip right-0 rounded-[100px] size-[24px] top-1/2" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function MarkerIcon() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%+42px)] overflow-clip top-1/2 w-[60px]" data-name="Marker: icon">
      <div className="-translate-y-1/2 absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Rectangle" />
      <Dot27 />
    </div>
  );
}

function Artwork34() {
  return (
    <div className="bg-[#f2f2f2] h-[248px] overflow-clip relative shrink-0 w-[448px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 size-[48px] top-1/2" data-name="radio-buttons">
        <Container25 />
      </div>
      <MarkerContainer />
      <MarkerStateLayer1 />
      <MarkerIcon />
    </div>
  );
}

function Exhibit34() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content59 />
      <Artwork34 />
    </div>
  );
}

function Anatomy2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Anatomy">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">Anatomy</p>
          <Exhibit34 />
        </div>
      </div>
    </div>
  );
}

function Label90() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">true (default)</p>
    </div>
  );
}

function Option23() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label90 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label91() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame67 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">icon</p>
    </div>
  );
}

function Component138() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">radio_button_checked</p>
      </div>
    </div>
  );
}

function Attribute123() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Property 1 :</p>
      </div>
      <Component138 />
    </div>
  );
}

function Element67() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label91 />
      <Attribute123 />
    </div>
  );
}

function Content60() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[362px]" data-name="Content">
      <Option23 />
      <Element67 />
    </div>
  );
}

function StateLayer50() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#A73A00" />
              <path d={svgPaths.p240d7000} fill="#A73A00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer50 />
    </div>
  );
}

function Artwork35() {
  return (
    <div className="bg-[#f2f2f2] h-[98px] overflow-clip relative shrink-0 w-[448px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 size-[48px] top-1/2" data-name="radio-buttons">
        <Container26 />
      </div>
    </div>
  );
}

function Exhibit35() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content60 />
      <Artwork35 />
    </div>
  );
}

function Label92() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">false</p>
    </div>
  );
}

function Option24() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label92 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label93() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame68 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">icon</p>
    </div>
  );
}

function Component139() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">radio_button_unchecked</p>
      </div>
    </div>
  );
}

function Attribute124() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Property 1 :</p>
      </div>
      <Component139 />
    </div>
  );
}

function Element68() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label93 />
      <Attribute124 />
    </div>
  );
}

function Content61() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[362px]" data-name="Content">
      <Option24 />
      <Element68 />
    </div>
  );
}

function StateLayer51() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3a58b490} fill="var(--fill-0, #53433E)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer51 />
    </div>
  );
}

function Artwork36() {
  return (
    <div className="bg-[#f2f2f2] h-[98px] overflow-clip relative shrink-0 w-[448px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 size-[48px] top-1/2" data-name="radio-buttons">
        <Container27 />
      </div>
    </div>
  );
}

function Exhibit36() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content61 />
      <Artwork36 />
    </div>
  );
}

function Selected() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="Selected">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">Selected</p>
      <Exhibit35 />
      <Exhibit36 />
    </div>
  );
}

function Label94() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Enabled (default)</p>
    </div>
  );
}

function Option25() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label94 />
    </div>
  );
}

function Content62() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[362px]" data-name="Content">
      <Option25 />
    </div>
  );
}

function StateLayer52() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#A73A00" />
              <path d={svgPaths.p240d7000} fill="#A73A00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer52 />
    </div>
  );
}

function Artwork37() {
  return (
    <div className="bg-[#f2f2f2] h-[98px] overflow-clip relative shrink-0 w-[448px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 size-[48px] top-1/2" data-name="radio-buttons">
        <Container28 />
      </div>
    </div>
  );
}

function Exhibit37() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content62 />
      <Artwork37 />
    </div>
  );
}

function Label95() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Hovered</p>
    </div>
  );
}

function Option26() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label95 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label96() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame69 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">state-layer</p>
    </div>
  );
}

function Component140() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/surfaces/light/surface2</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute125() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Background color :</p>
      </div>
      <Component140 />
    </div>
  );
}

function Element69() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label96 />
      <Attribute125 />
    </div>
  );
}

function Content63() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[362px]" data-name="Content">
      <Option26 />
      <Element69 />
    </div>
  );
}

function StateLayer53() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer" style={{ backgroundImage: "linear-gradient(90deg, rgba(167, 58, 0, 0.08) 0%, rgba(167, 58, 0, 0.08) 100%), linear-gradient(90deg, rgb(255, 251, 255) 0%, rgb(255, 251, 255) 100%)" }}>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#A73A00" />
              <path d={svgPaths.p240d7000} fill="#A73A00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer53 />
    </div>
  );
}

function Artwork38() {
  return (
    <div className="bg-[#f2f2f2] h-[98px] overflow-clip relative shrink-0 w-[448px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 size-[48px] top-1/2" data-name="radio-buttons">
        <Container29 />
      </div>
    </div>
  );
}

function Exhibit38() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content63 />
      <Artwork38 />
    </div>
  );
}

function Label97() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Focused</p>
    </div>
  );
}

function Option27() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label97 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label98() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame70 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">state-layer</p>
    </div>
  );
}

function Component141() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/surfaces/light/surface3</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute126() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Background color :</p>
      </div>
      <Component141 />
    </div>
  );
}

function Element70() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label98 />
      <Attribute126 />
    </div>
  );
}

function Content64() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Content">
      <Option27 />
      <Element70 />
    </div>
  );
}

function StateLayer54() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer" style={{ backgroundImage: "linear-gradient(90deg, rgba(167, 58, 0, 0.11) 0%, rgba(167, 58, 0, 0.11) 100%), linear-gradient(90deg, rgb(255, 251, 255) 0%, rgb(255, 251, 255) 100%)" }}>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#A73A00" />
              <path d={svgPaths.p240d7000} fill="#A73A00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer54 />
    </div>
  );
}

function Artwork39() {
  return (
    <div className="bg-[#f2f2f2] h-[98px] overflow-clip relative shrink-0 w-[448px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 size-[48px] top-1/2" data-name="radio-buttons">
        <Container30 />
      </div>
    </div>
  );
}

function Exhibit39() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content64 />
      <Artwork39 />
    </div>
  );
}

function Label99() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Pressed</p>
    </div>
  );
}

function Option28() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label99 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label100() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame71 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">state-layer</p>
    </div>
  );
}

function Component142() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/surfaces/light/surface4</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute127() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Background color :</p>
      </div>
      <Component142 />
    </div>
  );
}

function Element71() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label100 />
      <Attribute127 />
    </div>
  );
}

function Content65() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Content">
      <Option28 />
      <Element71 />
    </div>
  );
}

function StateLayer55() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer" style={{ backgroundImage: "linear-gradient(90deg, rgba(167, 58, 0, 0.12) 0%, rgba(167, 58, 0, 0.12) 100%), linear-gradient(90deg, rgb(255, 251, 255) 0%, rgb(255, 251, 255) 100%)" }}>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#A73A00" />
              <path d={svgPaths.p240d7000} fill="#A73A00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer55 />
    </div>
  );
}

function Artwork40() {
  return (
    <div className="bg-[#f2f2f2] h-[98px] overflow-clip relative shrink-0 w-[448px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 size-[48px] top-1/2" data-name="radio-buttons">
        <Container31 />
      </div>
    </div>
  );
}

function Exhibit40() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content65 />
      <Artwork40 />
    </div>
  );
}

function Label101() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Disabled</p>
    </div>
  );
}

function Option29() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label101 />
    </div>
  );
}

function Content66() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[362px]" data-name="Content">
      <Option29 />
    </div>
  );
}

function StateLayer56() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="opacity-38 overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#2D1600" />
              <path d={svgPaths.p240d7000} fill="#2D1600" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer56 />
    </div>
  );
}

function Artwork41() {
  return (
    <div className="bg-[#f2f2f2] h-[98px] overflow-clip relative shrink-0 w-[448px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 size-[48px] top-1/2" data-name="radio-buttons">
        <Container32 />
      </div>
    </div>
  );
}

function Exhibit41() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content66 />
      <Artwork41 />
    </div>
  );
}

function State2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="State">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">State</p>
      <Exhibit37 />
      <Exhibit38 />
      <Exhibit39 />
      <Exhibit40 />
      <Exhibit41 />
    </div>
  );
}

function Properties2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Properties">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">Properties</p>
          <Selected />
          <State2 />
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label102() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame72 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">radio-buttons</p>
    </div>
  );
}

function Component143() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Horizontal</p>
      </div>
    </div>
  );
}

function Attribute128() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Direction :</p>
      </div>
      <Component143 />
    </div>
  );
}

function Component144() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Middle center</p>
      </div>
    </div>
  );
}

function Attribute129() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Alignment :</p>
      </div>
      <Component144 />
    </div>
  );
}

function Component145() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Fixed</p>
      </div>
    </div>
  );
}

function Attribute130() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Vertical resizing :</p>
      </div>
      <Component145 />
    </div>
  );
}

function Component146() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Fixed</p>
      </div>
    </div>
  );
}

function Attribute131() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Horizontal resizing :</p>
      </div>
      <Component146 />
    </div>
  );
}

function Element72() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label102 />
      <Attribute128 />
      <Attribute129 />
      <Attribute130 />
      <Attribute131 />
    </div>
  );
}

function Elements8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Elements">
      <Element72 />
    </div>
  );
}

function Content67() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[362px]" data-name="Content">
      <Elements8 />
    </div>
  );
}

function StateLayer57() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#A73A00" />
              <path d={svgPaths.p240d7000} fill="#A73A00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer57 />
    </div>
  );
}

function StateLayer58() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#A73A00" />
              <path d={svgPaths.p240d7000} fill="#A73A00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer58 />
    </div>
  );
}

function DirectionArrow8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-56px)] size-[16px] top-[calc(50%-72px)]" data-name="Direction arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5232)" id="Direction arrow">
          <path d={svgPaths.p31f6a500} fill="var(--stroke-0, #6B6B6B)" id="Line 1" />
        </g>
        <defs>
          <clipPath id="clip0_3_5232">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ElementResizing16() {
  return (
    <div className="h-[16px] relative w-[48px]" data-name="Element resizing">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 16">
        <g id="Element resizing">
          <line id="Line" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="square" strokeWidth="1.5" x1="0.75" x2="47.25" y1="7.75" y2="7.75" />
          <line id="Edge 2" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="0.75" y1="2.75" y2="13.25" />
          <line id="Edge 1" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="round" strokeWidth="1.5" x1="47.25" x2="47.25" y1="13.25" y2="2.75" />
        </g>
      </svg>
    </div>
  );
}

function ElementResizing17() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-[calc(50%-72px)] w-[48px]" data-name="Element resizing">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 16">
        <g id="Element resizing">
          <line id="Line" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="square" strokeWidth="1.5" x1="0.75" x2="47.25" y1="7.75" y2="7.75" />
          <line id="Edge 2" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="0.75" y1="2.75" y2="13.25" />
          <line id="Edge 1" stroke="var(--stroke-0, #0D69D4)" strokeLinecap="round" strokeWidth="1.5" x1="47.25" x2="47.25" y1="13.25" y2="2.75" />
        </g>
      </svg>
    </div>
  );
}

function Component147() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 7.36396">
            <path d={svgPaths.p1d53d500} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 7.36396">
            <path d={svgPaths.p1d53d500} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChildElementResizing9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-[calc(50%-32px)] w-[40px]" data-name="Child element resizing">
      <Component147 />
    </div>
  );
}

function Artwork42() {
  return (
    <div className="bg-[#f2f2f2] h-[196px] overflow-clip relative shrink-0 w-[448px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 opacity-20 size-[48px] top-1/2" data-name="radio-buttons">
        <Container33 />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 opacity-20 size-[48px] top-1/2" data-name="Element annotated">
        <Container34 />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[48px] top-1/2" data-name="Element outline">
        <div aria-hidden="true" className="absolute border border-[#0d69d4] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <DirectionArrow8 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.014px] left-[calc(50%-72px)] top-[calc(50%-71.99px)] w-[16px]" data-name="Alignment: Middle center">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.014">
          <path clipRule="evenodd" d={svgPaths.p20b6c0} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Alignment: Middle center" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[48px] items-center justify-center left-[calc(50%-72px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ElementResizing16 />
        </div>
      </div>
      <ElementResizing17 />
      <ChildElementResizing9 />
    </div>
  );
}

function Exhibit42() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content67 />
      <Artwork42 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label103() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame73 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">container</p>
    </div>
  );
}

function Component148() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Horizontal</p>
      </div>
    </div>
  );
}

function Attribute132() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Direction :</p>
      </div>
      <Component148 />
    </div>
  );
}

function Component149() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Middle center</p>
      </div>
    </div>
  );
}

function Attribute133() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Alignment :</p>
      </div>
      <Component149 />
    </div>
  );
}

function Component150() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute134() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Vertical resizing :</p>
      </div>
      <Component150 />
    </div>
  );
}

function Component151() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute135() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Horizontal resizing :</p>
      </div>
      <Component151 />
    </div>
  );
}

function Element73() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label103 />
      <Attribute132 />
      <Attribute133 />
      <Attribute134 />
      <Attribute135 />
    </div>
  );
}

function Elements9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Elements">
      <Element73 />
    </div>
  );
}

function Content68() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[362px]" data-name="Content">
      <Elements9 />
    </div>
  );
}

function StateLayer59() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#A73A00" />
              <path d={svgPaths.p240d7000} fill="#A73A00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer59 />
    </div>
  );
}

function StateLayer60() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#A73A00" />
              <path d={svgPaths.p240d7000} fill="#A73A00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementAnnotated6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip rounded-[100px] top-1/2" data-name="Element annotated">
      <StateLayer60 />
    </div>
  );
}

function DirectionArrow9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-52px)] size-[16px] top-[calc(50%-68px)]" data-name="Direction arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5232)" id="Direction arrow">
          <path d={svgPaths.p31f6a500} fill="var(--stroke-0, #6B6B6B)" id="Line 1" />
        </g>
        <defs>
          <clipPath id="clip0_3_5232">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component152() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 11.0459">
            <path d={svgPaths.p2f868e80} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 11.0459">
            <path d={svgPaths.p2f868e80} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing18() {
  return (
    <div className="h-[16px] overflow-clip relative w-[40px]" data-name="Element resizing">
      <Component152 />
    </div>
  );
}

function Component153() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 11.0459">
            <path d={svgPaths.p2f868e80} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 11.0459">
            <path d={svgPaths.p2f868e80} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing19() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-[calc(50%-68px)] w-[40px]" data-name="Element resizing">
      <Component153 />
    </div>
  );
}

function Component154() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 7.36396">
            <path d={svgPaths.p1d53d500} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-4.18px_0_-3.18px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 7.36396">
            <path d={svgPaths.p1d53d500} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChildElementResizing10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-[calc(50%-28px)] w-[40px]" data-name="Child element resizing">
      <Component154 />
    </div>
  );
}

function Artwork43() {
  return (
    <div className="bg-[#f2f2f2] h-[196px] overflow-clip relative shrink-0 w-[448px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 opacity-20 size-[48px] top-1/2" data-name="radio-buttons">
        <Container35 />
      </div>
      <ElementAnnotated6 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2" data-name="Element outline">
        <div aria-hidden="true" className="absolute border border-[#0d69d4] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <DirectionArrow9 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.014px] left-[calc(50%-68px)] top-[calc(50%-67.99px)] w-[16px]" data-name="Alignment: Middle center">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.014">
          <path clipRule="evenodd" d={svgPaths.p20b6c0} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Alignment: Middle center" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[40px] items-center justify-center left-[calc(50%-68px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ElementResizing18 />
        </div>
      </div>
      <ElementResizing19 />
      <ChildElementResizing10 />
    </div>
  );
}

function Exhibit43() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content68 />
      <Artwork43 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p26ec9020} id="FRAME" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label104() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame74 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">state-layer</p>
    </div>
  );
}

function Component155() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Horizontal</p>
      </div>
    </div>
  );
}

function Attribute136() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Direction :</p>
      </div>
      <Component155 />
    </div>
  );
}

function Component156() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Middle center</p>
      </div>
    </div>
  );
}

function Attribute137() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Alignment :</p>
      </div>
      <Component156 />
    </div>
  );
}

function Component157() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute138() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Vertical resizing :</p>
      </div>
      <Component157 />
    </div>
  );
}

function Component158() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute139() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Horizontal resizing :</p>
      </div>
      <Component158 />
    </div>
  );
}

function Component159() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">8</p>
      </div>
    </div>
  );
}

function Attribute140() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Padding :</p>
      </div>
      <Component159 />
    </div>
  );
}

function Element74() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label104 />
      <Attribute136 />
      <Attribute137 />
      <Attribute138 />
      <Attribute139 />
      <Attribute140 />
    </div>
  );
}

function Elements10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Elements">
      <Element74 />
    </div>
  );
}

function Content69() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[362px]" data-name="Content">
      <Elements10 />
    </div>
  );
}

function StateLayer61() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#A73A00" />
              <path d={svgPaths.p240d7000} fill="#A73A00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer61 />
    </div>
  );
}

function ElementAnnotated7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 p-[8px] top-1/2" data-name="Element annotated">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="icon">
              <path d={svgPaths.p3a58b490} fill="#A73A00" />
              <path d={svgPaths.p240d7000} fill="#A73A00" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function DirectionArrow10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-52px)] size-[16px] top-[calc(50%-68px)]" data-name="Direction arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5232)" id="Direction arrow">
          <path d={svgPaths.p31f6a500} fill="var(--stroke-0, #6B6B6B)" id="Line 1" />
        </g>
        <defs>
          <clipPath id="clip0_3_5232">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component160() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 11.0459">
            <path d={svgPaths.p2f868e80} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 11.0459">
            <path d={svgPaths.p2f868e80} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing20() {
  return (
    <div className="h-[16px] overflow-clip relative w-[40px]" data-name="Element resizing">
      <Component160 />
    </div>
  );
}

function Component161() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 11.0459">
            <path d={svgPaths.p2f868e80} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 11.0459">
            <path d={svgPaths.p2f868e80} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing21() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-[calc(50%-68px)] w-[40px]" data-name="Element resizing">
      <Component161 />
    </div>
  );
}

function PaddingTop3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-14px)] top-[calc(50%-16.5px)]" data-name="PADDING TOP">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[8px] left-1/2 top-[calc(50%-16px)] w-[40px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%-19px)] w-[56px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="56" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%-12px)] w-[56px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="56" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-48px)] not-italic text-[#007d00] text-[12px] top-[calc(50%-24px)] whitespace-nowrap">8</p>
    </div>
  );
}

function PaddingBottom2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-14px)] top-[calc(50%+15.5px)]" data-name="PADDING BOTTOM">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[8px] left-1/2 top-[calc(50%+16px)] w-[40px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%+13px)] w-[56px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="56" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-8px)] top-[calc(50%+20px)] w-[56px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
            <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="56" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-48px)] not-italic text-[#007d00] text-[12px] top-[calc(50%+8px)] whitespace-nowrap">8</p>
    </div>
  );
}

function PaddingLeft4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-16px)] top-[calc(50%-16px)]" data-name="PADDING LEFT">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[24px] left-[calc(50%-16px)] top-1/2 w-[8px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[56px] items-center justify-center left-[calc(50%-20px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[56px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="56" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[56px] items-center justify-center left-[calc(50%-13px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[56px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="56" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-20px)] not-italic text-[#007d00] text-[12px] top-[calc(50%-52px)] whitespace-nowrap">8</p>
    </div>
  );
}

function PaddingRight3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+16px)] top-[calc(50%-16px)]" data-name="PADDING RIGHT">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,125,0,0.3)] h-[24px] left-[calc(50%+16px)] top-1/2 w-[8px]" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[56px] items-center justify-center left-[calc(50%+12px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[56px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="56" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[56px] items-center justify-center left-[calc(50%+19px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[56px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
                <line id="Line 1" stroke="var(--stroke-0, #007D00)" x2="56" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+12px)] not-italic text-[#007d00] text-[12px] top-[calc(50%-52px)] whitespace-nowrap">8</p>
    </div>
  );
}

function Artwork44() {
  return (
    <div className="bg-[#f2f2f2] h-[196px] overflow-clip relative shrink-0 w-[448px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 opacity-20 size-[48px] top-1/2" data-name="radio-buttons">
        <Container36 />
      </div>
      <ElementAnnotated7 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2" data-name="Element outline">
        <div aria-hidden="true" className="absolute border border-[#0d69d4] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <DirectionArrow10 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.014px] left-[calc(50%-68px)] top-[calc(50%-67.99px)] w-[16px]" data-name="Alignment: Middle center">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.014">
          <path clipRule="evenodd" d={svgPaths.p20b6c0} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Alignment: Middle center" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[40px] items-center justify-center left-[calc(50%-68px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ElementResizing20 />
        </div>
      </div>
      <ElementResizing21 />
      <PaddingTop3 />
      <PaddingBottom2 />
      <PaddingLeft4 />
      <PaddingRight3 />
    </div>
  );
}

function Exhibit44() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content69 />
      <Artwork44 />
    </div>
  );
}

function Spacing2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="Spacing">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">Spacing</p>
      <Exhibit42 />
      <Exhibit43 />
      <Exhibit44 />
    </div>
  );
}

function LayoutAndSpacing2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout and spacing">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">Layout and spacing</p>
          <Spacing2 />
        </div>
      </div>
    </div>
  );
}

function Specification2() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[1002px]" data-name="Specification">
      <Name2 />
      <Anatomy2 />
      <Properties2 />
      <LayoutAndSpacing2 />
    </div>
  );
}

function Specs2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Specs">
      <Specification2 />
    </div>
  );
}

function Name3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Name">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[64px] text-black whitespace-nowrap">Page Control</p>
        </div>
      </div>
    </div>
  );
}

function Dot28() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M2 5H17.998V15H2V5Z" id="RECTANGLE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label105() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame75 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Rectangle 1</p>
    </div>
  );
}

function Component162() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Material Themed/sys/light/primary</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute141() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Background color :</p>
      </div>
      <Component162 />
    </div>
  );
}

function Component163() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function Attribute142() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Border radius :</p>
      </div>
      <Component163 />
    </div>
  );
}

function Element75() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label105 />
      <Attribute141 />
      <Attribute142 />
    </div>
  );
}

function AnatomyItem14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot28 />
      <Element75 />
    </div>
  );
}

function Dot29() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1dac0b30} id="ELLIPSE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label106() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame76 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">ellipse</p>
    </div>
  );
}

function Component164() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Neutral/neutral-color-3</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute143() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Background color :</p>
      </div>
      <Component164 />
    </div>
  );
}

function Element76() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label106 />
      <Attribute143 />
    </div>
  );
}

function AnatomyItem15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot29 />
      <Element76 />
    </div>
  );
}

function Dot30() {
  return (
    <div className="bg-[#c54600] overflow-clip relative rounded-[100px] shrink-0 size-[20px]" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-center text-white top-1/2">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1dac0b30} id="ELLIPSE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label107() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame77 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">ellipse</p>
    </div>
  );
}

function Component165() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[99px] shrink-0" data-name="]-[">
      <div className="content-stretch flex items-start overflow-clip px-[9px] py-[4px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#851f41] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">App/Neutral/neutral-color-3</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Attribute144() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Background color :</p>
      </div>
      <Component165 />
    </div>
  );
}

function Element77() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label107 />
      <Attribute144 />
    </div>
  );
}

function AnatomyItem16() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Anatomy item">
      <Dot30 />
      <Element77 />
    </div>
  );
}

function Content70() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Content">
      <AnatomyItem14 />
      <AnatomyItem15 />
      <AnatomyItem16 />
    </div>
  );
}

function Dot31() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c54600] left-0 overflow-clip rounded-[100px] size-[24px] top-1/2" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function MarkerRectangle() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%-56px)] overflow-clip top-1/2 w-[48px]" data-name="Marker: Rectangle 1">
      <div className="-translate-y-1/2 absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Rectangle" />
      <Dot31 />
    </div>
  );
}

function Dot32() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#c54600] left-1/2 overflow-clip rounded-[100px] size-[24px] top-0" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function MarkerEllipse() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[48px] left-[calc(50%+12px)] overflow-clip top-[calc(50%-28px)] w-[24px]" data-name="Marker: ellipse">
      <div className="-translate-x-1/2 absolute bg-[#c54600] bottom-0 left-[calc(50%+0.5px)] top-0 w-px" data-name="Rectangle" />
      <Dot32 />
    </div>
  );
}

function Dot33() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c54600] overflow-clip right-0 rounded-[100px] size-[24px] top-1/2" data-name="Dot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-0 not-italic right-0 text-[14px] text-center text-white top-1/2">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function MarkerEllipse1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%+56px)] overflow-clip top-1/2 w-[48px]" data-name="Marker: ellipse">
      <div className="-translate-y-1/2 absolute bg-[#c54600] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Rectangle" />
      <Dot33 />
    </div>
  );
}

function Artwork45() {
  return (
    <div className="bg-[#f2f2f2] flex-[1_0_0] h-[208px] min-h-px min-w-px overflow-clip relative" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-start left-1/2 top-1/2" data-name="page control">
        <div className="bg-[#a73a00] h-[8px] rounded-[7px] shrink-0 w-[32px]" />
        <div className="relative shrink-0 size-[8px]" data-name="ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E5E5E5)" id="ellipse" r="4" />
          </svg>
        </div>
        <div className="relative shrink-0 size-[8px]" data-name="ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E5E5E5)" id="ellipse" r="4" />
          </svg>
        </div>
      </div>
      <MarkerRectangle />
      <MarkerEllipse />
      <MarkerEllipse1 />
    </div>
  );
}

function Exhibit45() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content70 />
      <Artwork45 />
    </div>
  );
}

function Anatomy3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Anatomy">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">Anatomy</p>
          <Exhibit45 />
        </div>
      </div>
    </div>
  );
}

function Label108() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">1 (default)</p>
    </div>
  );
}

function Option30() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label108 />
    </div>
  );
}

function Content71() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[353px]" data-name="Content">
      <Option30 />
    </div>
  );
}

function Artwork46() {
  return (
    <div className="bg-[#f2f2f2] h-[58px] overflow-clip relative shrink-0 w-[464px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-start left-1/2 top-1/2" data-name="page control">
        <div className="bg-[#a73a00] h-[8px] rounded-[7px] shrink-0 w-[32px]" />
        <div className="relative shrink-0 size-[8px]" data-name="ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E5E5E5)" id="ellipse" r="4" />
          </svg>
        </div>
        <div className="relative shrink-0 size-[8px]" data-name="ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E5E5E5)" id="ellipse" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Exhibit46() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content71 />
      <Artwork46 />
    </div>
  );
}

function Label109() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">2</p>
    </div>
  );
}

function Option31() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label109 />
    </div>
  );
}

function Content72() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[353px]" data-name="Content">
      <Option31 />
    </div>
  );
}

function Artwork47() {
  return (
    <div className="bg-[#f2f2f2] h-[58px] overflow-clip relative shrink-0 w-[464px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-start left-1/2 top-1/2" data-name="page control">
        <div className="relative shrink-0 size-[8px]" data-name="ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E5E5E5)" id="ellipse" r="4" />
          </svg>
        </div>
        <div className="bg-[#a73a00] h-[8px] rounded-[7px] shrink-0 w-[32px]" />
        <div className="relative shrink-0 size-[8px]" data-name="ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E5E5E5)" id="ellipse" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Exhibit47() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content72 />
      <Artwork47 />
    </div>
  );
}

function Label110() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">3</p>
    </div>
  );
}

function Option32() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Option">
      <Label110 />
    </div>
  );
}

function Content73() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[353px]" data-name="Content">
      <Option32 />
    </div>
  );
}

function Artwork48() {
  return (
    <div className="bg-[#f2f2f2] h-[58px] overflow-clip relative shrink-0 w-[464px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-start left-1/2 top-1/2" data-name="page control">
        <div className="relative shrink-0 size-[8px]" data-name="ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E5E5E5)" id="ellipse" r="4" />
          </svg>
        </div>
        <div className="relative shrink-0 size-[8px]" data-name="ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E5E5E5)" id="ellipse" r="4" />
          </svg>
        </div>
        <div className="bg-[#a73a00] h-[8px] rounded-[7px] shrink-0 w-[32px]" />
      </div>
    </div>
  );
}

function Exhibit48() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content73 />
      <Artwork48 />
    </div>
  );
}

function Selected1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="selected">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">selected</p>
      <Exhibit46 />
      <Exhibit47 />
      <Exhibit48 />
    </div>
  );
}

function Properties3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Properties">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">Properties</p>
          <Selected1 />
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p12d50b00} id="INSTANCE" stroke="var(--stroke-0, #6B6B6B)" />
        </g>
      </svg>
    </div>
  );
}

function Label111() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <Frame78 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">page control</p>
    </div>
  );
}

function Component166() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Horizontal</p>
      </div>
    </div>
  );
}

function Attribute145() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Direction :</p>
      </div>
      <Component166 />
    </div>
  );
}

function Component167() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Top left</p>
      </div>
    </div>
  );
}

function Attribute146() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Alignment :</p>
      </div>
      <Component167 />
    </div>
  );
}

function Component168() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute147() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Vertical resizing :</p>
      </div>
      <Component168 />
    </div>
  );
}

function Component169() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">Hug</p>
      </div>
    </div>
  );
}

function Attribute148() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Horizontal resizing :</p>
      </div>
      <Component169 />
    </div>
  );
}

function Component170() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[4px] relative shrink-0" data-name="]-[">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">8</p>
      </div>
    </div>
  );
}

function Attribute149() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Attribute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Item spacing:</p>
      </div>
      <Component170 />
    </div>
  );
}

function Element78() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Element">
      <Label111 />
      <Attribute145 />
      <Attribute146 />
      <Attribute147 />
      <Attribute148 />
      <Attribute149 />
    </div>
  );
}

function Elements11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Elements">
      <Element78 />
    </div>
  );
}

function Content74() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[353px]" data-name="Content">
      <Elements11 />
    </div>
  );
}

function DirectionArrow11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-64px)] size-[16px] top-[calc(50%-52px)]" data-name="Direction arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5232)" id="Direction arrow">
          <path d={svgPaths.p31f6a500} fill="var(--stroke-0, #6B6B6B)" id="Line 1" />
        </g>
        <defs>
          <clipPath id="clip0_3_5232">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component171() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 11.0459">
            <path d={svgPaths.p11407c00} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 11.0459">
            <path d={svgPaths.p11407c00} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing22() {
  return (
    <div className="h-[16px] overflow-clip relative w-[8px]" data-name="Element resizing">
      <Component171 />
    </div>
  );
}

function Component172() {
  return (
    <div className="absolute content-stretch flex gap-px inset-[0_-10px] items-start overflow-clip pt-[8px]" data-name="]-[">
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.5 11.0459">
            <path d={svgPaths.p22030780} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
        <div className="absolute inset-[-6.27px_0_-4.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.5 11.0459">
            <path d={svgPaths.p22030780} fill="var(--stroke-0, #0D69D4)" id="Line 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ElementResizing23() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-[calc(50%-52px)] w-[64px]" data-name="Element resizing">
      <Component172 />
    </div>
  );
}

function ItemSpacing2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+4px)] top-[calc(50%-16px)]" data-name="ITEM SPACING">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(197,70,0,0.3)] left-[calc(50%+4px)] size-[8px] top-1/2" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[24px] items-center justify-center left-1/2 top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Line 1" stroke="var(--stroke-0, #C54600)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[24px] items-center justify-center left-[calc(50%+7px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Line 1" stroke="var(--stroke-0, #C54600)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#c54600] text-[12px] top-[calc(50%-36px)] whitespace-nowrap">8</p>
    </div>
  );
}

function ItemSpacing3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+20px)] top-[calc(50%-16px)]" data-name="ITEM SPACING">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(197,70,0,0.3)] left-[calc(50%+20px)] size-[8px] top-1/2" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[24px] items-center justify-center left-[calc(50%+16px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Line 1" stroke="var(--stroke-0, #C54600)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[24px] items-center justify-center left-[calc(50%+23px)] top-[calc(50%-8px)] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Line 1" stroke="var(--stroke-0, #C54600)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+16px)] not-italic text-[#c54600] text-[12px] top-[calc(50%-36px)] whitespace-nowrap">8</p>
    </div>
  );
}

function Artwork49() {
  return (
    <div className="bg-[#f2f2f2] h-[156px] overflow-clip relative shrink-0 w-[464px]" data-name="Artwork">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-start left-1/2 opacity-20 top-1/2" data-name="page control">
        <div className="bg-[#a73a00] h-[8px] rounded-[7px] shrink-0 w-[32px]" />
        <div className="relative shrink-0 size-[8px]" data-name="ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E5E5E5)" id="ellipse" r="4" />
          </svg>
        </div>
        <div className="relative shrink-0 size-[8px]" data-name="ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E5E5E5)" id="ellipse" r="4" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-start left-1/2 opacity-20 top-1/2" data-name="Element annotated">
        <div className="bg-[#a73a00] h-[8px] rounded-[7px] shrink-0 w-[32px]" />
        <div className="relative shrink-0 size-[8px]" data-name="ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E5E5E5)" id="ellipse" r="4" />
          </svg>
        </div>
        <div className="relative shrink-0 size-[8px]" data-name="ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E5E5E5)" id="ellipse" r="4" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[8px] left-1/2 top-1/2 w-[64px]" data-name="Element outline">
        <div aria-hidden="true" className="absolute border border-[#0d69d4] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <DirectionArrow11 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.014px] left-[calc(50%-80px)] top-[calc(50%-51.99px)] w-[16px]" data-name="Alignment: Top left">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.014">
          <path clipRule="evenodd" d={svgPaths.p500d900} fill="var(--fill-0, #6B6B6B)" fillRule="evenodd" id="Alignment: Top left" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[8px] items-center justify-center left-[calc(50%-80px)] top-1/2 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ElementResizing22 />
        </div>
      </div>
      <ElementResizing23 />
      <ItemSpacing2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(13,105,212,0.2)] h-[8px] left-[calc(50%-16px)] top-1/2 w-[32px]" data-name="Child element overlay" />
      <ItemSpacing3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(13,105,212,0.2)] left-[calc(50%+12px)] size-[8px] top-1/2" data-name="Child element overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(13,105,212,0.2)] left-[calc(50%+28px)] size-[8px] top-1/2" data-name="Child element overlay" />
    </div>
  );
}

function Exhibit49() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0" data-name="Exhibit">
      <Content74 />
      <Artwork49 />
    </div>
  );
}

function Spacing3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0" data-name="Spacing">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[36px] text-black whitespace-nowrap">Spacing</p>
      <Exhibit49 />
    </div>
  );
}

function LayoutAndSpacing3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout and spacing">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">Layout and spacing</p>
          <Spacing3 />
        </div>
      </div>
    </div>
  );
}

function Specification3() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[1009px]" data-name="Specification">
      <Name3 />
      <Anatomy3 />
      <Properties3 />
      <LayoutAndSpacing3 />
    </div>
  );
}

function Specs3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Specs">
      <Specification3 />
    </div>
  );
}

function Specs() {
  return (
    <div className="content-stretch flex gap-[80px] items-start overflow-clip relative shrink-0" data-name="Specs">
      <Specification />
      <Specs1 />
      <Specs2 />
      <Specs3 />
    </div>
  );
}

export default function Components() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[80px] items-start p-[120px] relative size-full" data-name="components">
      <Heading />
      <Specs />
    </div>
  );
}