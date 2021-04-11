
import { useRouter } from 'next/router'

export default function Link({children, href}) {
  const router = useRouter()
  const style = {
    float:'left',
    color: router.pathname===href?"white":"black",
    // backgroundColor: router.pathname===href?"black":"white",
    textAlign:'center',
    padding: "14px 16px",
    textDecoration:"none",
    fontSize: 17,
    "&:hover":{
      backgroundColor: "#ddd",
      color: "black",
    }
  }
  console.log(router.pathname)
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <a href={href} onClick={handleClick}  style={style}>
      {children}
    </a>
  )
}



