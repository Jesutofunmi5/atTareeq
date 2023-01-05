<template>
    <div class="layout-wrapper">
     <Header />
    <!-- header -->
  
    <!-- ./ header -->

    <!-- content -->
    <div class="content ">
        
    <div class="mb-4">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <nuxt-link  to="/">
                        <i class="bi bi-globe2 small me-2"></i> Dashboard
                    </nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Message Detail</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="slick-wrapper">
                                <div class="slider-for mb-3">
                                    <div class="slick-slide-item">
                                        <img src="assets/images/products/2.jpg" class="w-100 rounded"
                                             alt="image">
                                    </div>
                                    <div class="slick-slide-item">
                                        <img src="/assets/images/products/1.jpg" class="w-100 rounded"
                                             alt="image">
                                    </div>
                                    <div class="slick-slide-item">
                                        <img src="/assets/images/products/3.jpg" class="w-100 rounded"
                                             alt="image">
                                    </div>
                                    <div class="slick-slide-item">
                                        <img src="/assets/images/products/4.jpg" class="w-100 rounded"
                                             alt="image">
                                    </div>
                                    <div class="slick-slide-item">
                                        <img src="/assets/images/products/5.jpg" class="w-100 rounded"
                                             alt="image">
                                    </div>
                                </div>
                                <div class="slick-nav-wrapper">
                                    <div class="slider-nav">
                                        <div class="slick-slide-item m-2">
                                            <img src="/assets/images/products/2.jpg" class="w-100 rounded"
                                                 alt="image">
                                        </div>
                                        <div class="slick-slide-item m-2">
                                            <img src="/assets/images/products/1.jpg" class="w-100 rounded"
                                                 alt="image">
                                        </div>
                                        <div class="slick-slide-item m-2">
                                            <img src="/assets/images/products/3.jpg" class="w-100 rounded"
                                                 alt="image">
                                        </div>
                                        <div class="slick-slide-item m-2">
                                            <img src="/assets/images/products/4.jpg" class="w-100 rounded"
                                                 alt="image">
                                        </div>
                                        <div class="slick-slide-item m-2">
                                            <img src="/assets/images/products/5.jpg" class="w-100 rounded"
                                                 alt="image">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="d-flex justify-content-between align-items-start mt-4 mt-md-0">
                                <div>
                                    <div class="small text-muted mb-2">{{ message.categoryId[0].name}}</div>
                                    <h2>{{ message.title}}</h2>
                                    <template>
                                    <p v-if="message.secretMessage">
                                        <span class="badge bg-success">Online</span>
                                    </p>
                                    <p v-else>
                                        <span class="badge bg-danger">Offline</span>
                                    </p>
                                    </template>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda
                                        autem eaque error explicabo fugiat iusto necessitatibus, temporibus. Laudantium,
                                        voluptate?</p>
                                   
                                    <div class="d-flex gap-2 mb-3">
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-muted"></i>
                                        <span>({{message.ratingsAverage}})</span>
                                    </div>
                                    <p>Features:</p>
                                    <p>It is a long established fact that a reader will be distracted.
                                        Contrary to popular belief, Lorem Ipsum is not text.
                                        There are many variations of passages of Lorem.</p>
                                    <form class="mt-4">
                                        <div class="row row-cols-lg-auto">
                                            <div class="col-12">
                                                <div class="input-group">
                                                    <button class="btn btn-primary" type="button">View</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <a href="#" class="btn btn-icon flex-shrink-0">
                                    <i class="bi bi-heart-fill text-danger"></i> {{message.ratingsQuantity}}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab"
                               aria-controls="description" aria-selected="true">Descriptions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab"
                               aria-controls="reviews" aria-selected="false">Reviews ({{message.ratingsQuantity}})</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="description" role="tabpanel"
                             aria-labelledby="description-tab">
                            <p class="font-weight-bold">Where was he raised?</p>
                            <p>Vivamus ultricies augue vitae commodo condimentum. Nullamfaucibus eros eu mauris
                                feugiat, eget consectetur tortor tempus. Sed volutpatmollis dui eget fringilla.
                                Vestibulum blandit urna ut tellus lobortis tristique.Vestibulum ante ipsum
                                primis in
                                faucibus orci luctus et ultrices posuere cubiliaCurae; Pellentesque quis cursus
                                mauris. Nam in ornare erat. Vestibulum convallisenim ac massa dapibus
                                consectetur.
                                Maecenas facilisis eros ac felis mattis, egetauctor sapien varius.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores
                                dolorum
                                earum fugiat nostrum obcaecati, quis ratione rerum sapiente soluta!</p>
                            <p class="font-weight-bold">Chemicals in</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
                                reiciendis!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, animi, aperiam
                                corporis, dolorum fugiat fugit maxime nisi optio quo similique sit sunt tempora.
                                Commodi culpa debitis deleniti dolore maiores, maxime praesentium. Autem dicta
                                dolore ipsum molestiae quae, quasi soluta tempora.</p>
                        </div>
                        <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="mb-5">
                                        <div class="display-6">{{message.ratingsAverage}}</div>
                                        <div class="d-flex gap-2 my-3">
                                            <i class="bi bi-star-fill icon-lg text-warning" v-for="rate, index in message.ratingsAverage" :key="index"></i>
                                           
                                            <span>({{message.ratingsQuantity}})</span>
                                        </div>
                                    </div>
                                    <div class="list-group list-group-flush mb-4">
                                        <div class="list-group-item d-flex px-0" v-for="review in message.reviews"  :key="
                                        review._id">
                                            <div class="avatar flex-shrink-0 me-3">
                                                <img :src="review.userId.photo" class="rounded-circle" alt="image"/>
                                            </div>
                                            <div>
                                                <h5 class="mb-1">{{review.userId.name}}</h5>
                                                <div class="d-flex gap-2 mb-3">
                                                    <i class="bi bi-star-fill text-warning" v-for="rate, index in review.rating" :key="index"></i>
                                                
                                                </div>
                                                <div>{{review.review}}
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <form>
                                        <div class="mb-3">
                                            <label class="form-label">Comment:</label>
                                            <textarea rows="3" class="form-control" placeholder="Your opinion on the product"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Rate:</label>
                                            <div class="d-flex align-items-center">
                                                <div class="rating-example"></div>
                                                <div class="live-rating ms-3"></div>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary mt-3" type="button" id="button-addon2">Send Review</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>

        </div>
    </div>

    </div>
    <!-- ./ content -->

    <!-- content-footer -->
        <Footer/>
    <!-- ./ content-footer -->

</div>
</template>

<script>
import Header from '../../components/inc/Header.vue';
import Footer from '../../components/inc/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  },
    

    asyncData({$axios, route}) {
      return $axios.$get(`/messages/${route.params.message}`).then(res=> {
           return {
               message: res.data.data
           }
       })
          
    },

// beforeMount(){
//     this.$store.dispatch('getMessage', {id: this.$route.params.message});
//  },

// computed:{
//     message() {
//       return this.$store.state.message;
//     },
//   }


}
</script>

