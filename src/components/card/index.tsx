
export default function Card({title,text, paragraf}) {
  return (
    <div className="card">
      <h2 >
        {title}
      </h2>
      <h3>
        {paragraf}
      </h3>
      <p>  
        {text}
      </p>
    </div>
  )
}
