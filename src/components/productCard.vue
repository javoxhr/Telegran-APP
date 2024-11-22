<script setup>
import notImg from "../assets/images/png/no-img.png"
const {product} = defineProps(['product'])
</script>

<template>
    <div class="product-card">
        <img class="product-img" :src="product?.img ? product?.img : notImg" alt="">
        <div class="product-card-wrapper">
            <div class="product-title-and-price">
                <h2 class="product-title">{{ product?.title }}</h2>
                <span class="product-price">{{ product?.price ?  product?.price : 200}} uzs</span>
            </div>
            <div class="product-location">
                <!-- <img src="@/assets/images/svg/location.svg" alt=""> -->
                <span>{{ product?.loaction ? product?.location : "Farg'ona" }}</span>
            </div>
            <div class="product-btns">
                <button class="like-btn">
                    <svg style="width: 25px;" fill="#979797" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.product-btns {
    .like-btn {
        position: absolute;
        bottom: 10px;
        right: 20px;
    }
}

.product-card-wrapper {
    padding: 5px 10px;
    position: relative;
}
.product-card {
    width: 100%;
    box-shadow: 1px 1px 10px #e0e0e0;
    border-radius: 5px;
}

.product-img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.product-title {
    font-weight: 500;
    font-size: 20px;
    padding: 0 5px;
}

.product-price {
    font-weight: 400;
    font-size: 17px;
    padding: 0 5px;
}

.product-title-and-price {
    display: flex;
    flex-direction: column;
}

.product-location {
    display: flex;
    align-items: center;
    gap: 2px;
    margin-left: -10px;
    img {
        width: 45px;
    }
}
</style>