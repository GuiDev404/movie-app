import { useEffect, useRef } from 'react';

export default function useSEO ({ description, title }) {
  // guarda el titulo y la descripcion del primer renderizado
  const prevTitle = useRef(document.title); 
  const prevDescription = useRef(document.querySelector('meta[name="description"').getAttribute('content'))

  useEffect(()=> {
    const previusTitle = prevTitle.current;

    if (title) {
      document.title = `${title} | Pururu`;
    }

    return ()=> document.title = previusTitle;
  }, [title])

  useEffect(()=>{
    const metaDescription = document.querySelector('meta[name="description"');
    const previusDescription = prevDescription.current;

    if(description) {
      metaDescription.setAttribute('content', description);
    }

    return ()=> metaDescription.setAttribute('content', previusDescription);
  }, [description])
}