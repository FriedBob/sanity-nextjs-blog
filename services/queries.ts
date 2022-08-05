export const sanityQuery = {
  // Blog에 작성된 Post들을 배열에 담고
  // 배열 내부 요소에는 Post의 구성요소들을 내부 배열에 담는 쿼리문
  homeQuery: `*[_type == 'post']{
    title,
    subtitle,
    createdAt,
    'content': content[]{
      ... , 
      ...select(_type == 'imageGallery' => {
        'images': images[]{
           ... , 'url' : asset -> url }})
  },
    'slug': slug.current,
    'thumbnail': {
      'alt': thumbnail.alt,
      'imageUrl': thumbnail.asset -> url
    },
    'author': author -> {
      name, role,
      'image': image.asset -> url
     },
     'tag': tag -> {
       title,
       'slug': slug.current
     }
  }`,
  // home 카테고리에서 mainPost로 등록된 게시글의 slug를 반환하는 쿼리문
  mainPostUrlQuery: `
  *[_type == 'home'][0]{'mainPostUrl': mainPost -> slug.current}
  `,
};
