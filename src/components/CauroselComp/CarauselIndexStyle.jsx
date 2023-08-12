import tw from "tailwind-styled-components"

export const ContainerCarausel = tw.div`
w-full 
relative
`

export const ImgContainer = tw.img`
w-full 
h-full
top-0 
left-0 
object-cover
rounded-2xl
`



export const RenderArrowNextCSS = tw.div`
${(p) => (p.$hasNext ? 'absolute': 'absolute')}

top-0 
bottom-0 
right-0 
flex 
justify-center
items-center
p-3 
opacity-30
hover:opacity-100 
cursor-pointer z-20
`


export const RenderArrowNextLeftCSS = tw.div`
${(p) => (p.$hasNext ? 'absolute': 'absolute')}

top-0 bottom-0 left-0 flex justify-center items-center 
p-3 opacity-30 hover:opacity-100 cursor-pointer z-20
`



export const FatArrowCSS = tw.div`
w-9 h-9 text-white
`
