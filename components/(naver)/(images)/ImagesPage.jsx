import search from './images.module.css'

export default function ImagesPage({results}) {
 
  return (
        <div className={search.container}>
      {results.map((item) => (
        <div className={search.imgBox} key={item.title}>
          <img src={item.thumbnail} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
