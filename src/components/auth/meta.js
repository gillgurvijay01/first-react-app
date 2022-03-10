import DocumentMeta from "react-document-meta";

function Meta() {
  const meta = {
    // title: 'Some Meta Title',
    // description: 'I am a description, and I can create multiple tags',
    // canonical: 'http://example.com/path/to/page',

    // meta: {
    //   charset: 'utf-8',
    //   name: {
    //     keywords: 'react,meta,document,html,tags'
    //   }
    // },

    // link:{
    // 	href:"https://fonts.googleapis.com"
    // },

    // link:{
    // 	href:"https://fonts.gstatic.com"
    // },

    // link:{
    // 	href:"https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap"
    // },

    // link:{
    // 	href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    // },

    // link:{
    // 	href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
    // },

    // link:{
    // 	href:"lib/owlcarousel/assets/owl.carousel.min.css"
    // },

    link: {
      href: "lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css",
    },

    // link:{
    // 	href:"css/bootstrap.min.css"
    // },
  };
  return <DocumentMeta {...meta}> </DocumentMeta>;
}

export default Meta;
