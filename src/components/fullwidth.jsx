import haber1img from "../assets/blog-imgg.jpg";
import haber2img from "../assets/blog-imgg2.jpg";
import haber3img from "../assets/blog-imgg3.jpg";
function Fullwidth() {
  const haberler = [
    {
      img: haber1img,
      baslik: "Pellentesque habitant morbi",
      yapan: "by magik themes",
      yorumSayisi: "5 comments",
      tarih: "january 4, 2016",
      metin:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et mi vulputate gen vehicula maximus sagittis rhoncus tortor. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Sed vel nisi orci. Pellentesque sed dignissim dolor, sit amet gravida orci. Suspendisse imperdiet ex vel lacus imperdiet mollis. Sed feugiat enim sed eros interdum, […]",
    },
    {
      img: haber2img,
      baslik: "Standard blog post with photo",
      yapan: "by magik themes",
      yorumSayisi: "4 comments",
      tarih: "december 2, 2015",
      metin:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et mi vulputate gen vehicula maximus sagittis rhoncus tortor. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Sed vel nisi orci. Pellentesque sed dignissim dolor, sit amet gravida orci. Suspendisse imperdiet ex vel lacus imperdiet mollis. Sed feugiat enim sed eros interdum, […]",
    },
    {
      img: haber3img,
      baslik: "Hello world our first post",
      yapan: "by magik themes",
      yorumSayisi: "4 comments",
      tarih: "november 10, 2015",
      metin:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et mi vulputate gen vehicula maximus sagittis rhoncus tortor. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Sed vel nisi orci. Pellentesque sed dignissim dolor, sit amet gravida orci. Suspendisse imperdiet ex vel lacus imperdiet mollis. Sed feugiat enim sed eros interdum, […]",
    },
  ];
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            {haberler.map((haber, index) => (
              <div className="row mb-4" key={index}>
                <div className="col-md-12">
                  <img
                    src={haber.img}
                    alt={haber.baslik}
                    className="img-fluid mb-2"
                  />
                  <h3>{haber.baslik}</h3>
                  <p>
                    <small>
                      {haber.yapan} | {haber.yorumSayisi} | {haber.tarih}
                    </small>
                  </p>
                  <p>{haber.metin}</p>
                </div>
              </div>
            ))}
          </div>
       
        </div>
      </div>
    </>
  );
}

export default Fullwidth;
