<template>
  <div class="accordion-item">

    <div class="d-flex align-items-center justify-content-between">
      <div class="accordion-header pb-5 pb-sm-0 w-100" id="team-heading">
        <a class="accordion-button p-0 section-team__title text-dark rounded-0 collapsed" data-bs-toggle="collapse" data-bs-target="#team-body" aria-expanded="false" aria-controls="team-body">
          <h3 class="h3">Meet team</h3>
        </a>
      </div>
      <div class="d-none d-sm-block"><a href="#" class="btn btn-secondary btn-icon">Meet team <i class="icon-btn-icon"></i></a></div>
    </div>

    <div id="team-body" class="accordion-collapse collapse d-sm-block" aria-labelledby="team-heading" data-bs-parent="#accordionResource">
    <div class="accordion-body pt-sm-15 pt-lg-20 pt-xl-25 pb-0">
      <div class="section-team__slider position-relative">
        <div class="slide-team js-slide-team">
        <div class="swiper-container">
          <div class="swiper-wrapper d-block d-sm-flex">
            <ac1 />
            <ac2 />
            <ac1 />
            <ac2 />
            <ac1 />
            <ac2 />
            <ac1 />
            <ac2 />
          </div>
          <div class="swiper-controls slide-team__controls d-none d-sm-block">
            <div class="swiper__button-prev position-absolute z-index-3 top-50 translate-middle"><i class="icon-left-arrow"></i></div>
            <div class="swiper__button-next position-absolute z-index-3 top-50 translate-middle"><i class="icon-right-arrow"></i></div>
          </div>
        </div>
        </div>
      </div>
      <div class="pt-10 text-center d-sm-none"><a href="#" class="btn btn-secondary btn-icon">More<i class="icon-btn-icon"></i></a></div>
    </div>
    </div>

  </div>
</template>
