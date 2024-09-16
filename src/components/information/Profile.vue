<template>
    <div class="profile min-h-96 mb-24">
        <div class="grid sm:grid-cols-2 mx-3 h-96">
            <div class="justify-self-center self-center">
                <img src="@/assets/image/profile.png" class="rounded-full place-self-center m-auto" alt=""
                    width="300" />
                <p class="text-2xl font-bold mt-4 animate-pulse" style="margin-top: -30px">Muhammad Putra Rasidin</p>
            </div>
            <div class="self-center">
                <p class="text-2xl animate-bounce" style="margin-top: 50px">Welcome to My Profile</p>
                <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi magnam libero quia, aperiam
                    fuga? Veritatis earum facilis, distinctio, ex ipsum fuga praesentium obcaecati dolore incidunt ut,
                    voluptates illo quae?</p>
                <!-- Tambahkan ikon dengan link -->
                <div class="flex mt-4 space-x-4">
                    <a href="https://github.com/Siputtttt" target="_blank" class="text-white">
                        <font-awesome-icon :icon="['fab', 'github']" size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-putra-3a242a21b/" target="_blank" class="text-white">
                        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
                    </a>
                    <a href="https://www.instagram.com/mputrarasid/" target="_blank" class="text-white">
                        <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin, faInstagram);

</script>