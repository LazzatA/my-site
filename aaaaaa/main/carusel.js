
/****** Bootstrap carousel ******/
const page2 = document.querySelector(".page2")
blockContainer = page2.firstElementChild
const carousel =  `
  <div id="carouselSlides" class="carousel slide" data-ride="carousel" data-interval="3000" style="width: 800px">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item carouselimg active">
            <img src="images/english.jpeg" class="d-block w-100" alt="..." >
          </div>
          <div class="carousel-item carouselimg">
            <img src="images/math.jpeg" class="d-block w-100"  alt="...">
          </div>
          <div class="carousel-item carouselimg">
            <img src="images/russian.jpeg" class="d-block w-100"
                 style="padding-top: 135px;" alt="...">
          </div>
        
        </div>
      </div>
`; blockContainer.insertAdjacentHTML('beforeend', carousel)

