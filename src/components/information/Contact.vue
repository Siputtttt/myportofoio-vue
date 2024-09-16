<template>
    <h2 class="text-3xl font-bold mb-8 mt-1 sm:mt-10 text-center text-white">Contact Me</h2>
    <div class="contact min-w-4/5 p-6 mx-auto max-w-lg  rounded-lg">
        <form @submit.prevent="submitForm" class="bg-gray-800 rounded-lg shadow-lg p-6">
            <div class="mb-6">
                <label for="name" class="block text-white text-sm font-bold mb-2">Name</label>
                <input v-model="form.name" type="text" id="name" placeholder="Your Name"
                    class="w-full px-3 py-2 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required />
            </div>
            <div class="mb-6">
                <label for="email" class="block text-white text-sm font-bold mb-2">Email</label>
                <input v-model="form.email" type="email" id="email" placeholder="Your Email"
                    class="w-full px-3 py-2 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required />
            </div>
            <div class="mb-6">
                <label for="message" class="block text-white text-sm font-bold mb-2">Message</label>
                <textarea v-model="form.message" id="message" rows="5" placeholder="Your Message"
                    class="w-full px-3 py-2 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required></textarea>
            </div>
            <button type="submit"
                class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                Send Message
            </button>
        </form>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Form submission logic (e.g., send data to an API)
            const { name, email, message } = this.form;
            if (name && email && message) {
                console.log('Form Data:', this.form);
                // Reset form after submission
                this.form.name = '';
                this.form.email = '';
                this.form.message = '';
                alert("Your message has been sent successfully!");
            } else {
                alert("Please fill out all fields.");
            }
        }
    }
};
</script>

<style scoped>
.contact {
    background-color: #1f2937;
}

form {
    background-color: #374151;
}

input,
textarea {
    background-color: #e5e7eb;
}
</style>
