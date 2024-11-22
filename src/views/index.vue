<script setup>
import productCard from "../components/productCard.vue";
import { ref, onMounted, inject } from "vue";
import { collection, getDocs } from "firebase/firestore";

const db = inject('db');

const products = ref([]);
const loading = ref(true);

onMounted(async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        products.value = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log("Данные успешно получены:", products.value);
    } catch (error) {
        console.error("Ошибка при получении данных из Firestore:", error);
    } finally {
        loading.value = false;
    }
});
</script>


<template>
    <div>
        <loaderForCards v-if="loader"/>

        <h1 class="main-title">Savdo <span>hub</span></h1>

        <div class="add-product-wrp">
            <NuxtLink to="addProduct" class="add-product-btn">Разместить обявление
                <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg
                    height="32px" fill="#fff" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1"
                    viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
                </svg>
            </NuxtLink>
        </div>

        <div class="product-cards-wrapper">
            <productCard v-for="item in products" :key="item" :product="item" />
        </div>
    </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: sans-serif;
}
.product-cards-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 10px;
    padding: 0 10px;

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }
}

.item {
    width: 300px;
    box-shadow: 1px 1px 10px 2px #dbdbdb;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
}

.list-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.main-title {
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    padding: 10px 0;
    font-weight: 600;
    font-size: 35px;

    span {
        background: #ffa500;
        padding: 2px 6px;
        border-radius: 5px;
    }
}

.add-product-btn {
    width: 100%;
    padding: 7px 15px;
    background: #000;
    color: #fff;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 500;
    font-size: 20px;
    border-radius: 5px;
    transition: all .2s ease;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.8;
    }
}

.add-product-wrp {
    padding: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>