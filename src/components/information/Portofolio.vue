<template>
    <h2 class="text-3xl font-bold mb-8 sm:mt-24 text-center text-white">Portfolio</h2>
    <div class="portfolio min-h-full mb-10 sm:mb-14 mx-3 rounded-lg">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mx-3 py-10">
            <div v-for="project in portfolioItems" :key="project.title"
                class="portfolio-item rounded-lg shadow-lg overflow-hidden">
                <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h3 class="text-xl font-semibold text-white">{{ project.title }}</h3>
                    <p class="text-white mt-2">{{ project.description }}</p>
                    <a :href="project.link" target="_blank" class="mt-4 inline-block text-blue-500 hover:underline">View
                        Project</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import porto1 from '../../assets/image/portofolio/porto1.png';

export default {
    data() {
        return {
            portfolioItems: [
                {
                    title: 'Project 1',
                    description: 'A description of the first project.',
                    image: porto1,
                    link: 'https://example.com/project1'
                },
                {
                    title: 'Project 2',
                    description: 'A description of the first project.',
                    image: porto1,
                    link: 'https://example.com/project1'
                },
                {
                    title: 'Project 3',
                    description: 'A description of the first project.',
                    image: porto1,
                    link: 'https://example.com/project1'
                },
                // Add more projects as needed
            ]
        };
    }
};
</script>
<style scoped>
.portfolio {
    background-color: #1f2937;
}

.portfolio-item {
    background-color: #374151;
    transition: transform 0.3s ease;
}

.portfolio-item:hover {
    transform: translateY(-10px);
}

.portfolio-item img {
    transition: opacity 0.3s ease;
}

.portfolio-item:hover img {
    opacity: 0.9;
}

.portfolio-item h3 {
    color: #fff;
}

.portfolio-item p {
    color: #d1d5db;
}

.portfolio-item a {
    color: #3b82f6;
}
</style>