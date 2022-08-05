export const sanityQuery = {
  // blog home에서 쓰일 쿼리문
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
  mainPostUrlQuery: `
  *[_type == 'home'][0]{'mainPostUrl': mainPost -> slug.current}
  `,
};
