<template>
  <div>
    <div class="sidebar">
      <ul>
        <li
            v-for="(heading, index) in headings"
            :key="index"
            :class="{ active: activeIndex === index }"
        >
          <a :href="'#' + heading.id">{{ heading.text }}</a>
        </li>
      </ul>
    </div>

    <div class="content">
      <div v-html="testFile"></div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, onUnmounted, nextTick} from 'vue';
import testFile from '@/test.md';

export default {
  setup() {
    const headings = ref([]);
    const activeIndex = ref(0);

    // Hàm này sẽ chạy khi cuộn trang
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition)

      console.log(window.pageYOffset)

      let foundIndex = -1;
      headings.value.forEach((heading, index) => {
        const element = document.getElementById(heading.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.pageYOffset - 50; // Trừ đi một khoảng để tính cho header nếu có
          if (scrollPosition >= top) {
            foundIndex = index;
          }
        }
      });

      activeIndex.value = foundIndex;
    };

    function convertToSlug(Text) {
      return Text.toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
    }

    // Lấy danh sách các tiêu đề h1, h2, h3 từ trang
    const getHeadings = () => {
      const headingsList = [];
      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      elements.forEach((element) => {

        element.id = convertToSlug(element.textContent)
        headingsList.push({
          id: convertToSlug(element.textContent),
          text: element.textContent,
        });
      });
      headings.value = headingsList;
    };

    onMounted(() => {
      nextTick(() => {
        getHeadings();
        window.addEventListener('scroll', handleScroll);
      })
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      headings,
      activeIndex,
      testFile
    };
  },
};
</script>

<style>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 10px;
}

.sidebar li.active {
  background-color: #d3d3d3;
}

.content {
  margin-left: 220px;
}
</style>


import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';

import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    {
      name: 'vite-plugin-markdown',
      transform(src, id) {
        if (id.endsWith('.md')) {
          // Xử lý Markdown với Markdown-it
          const html = markdown.render(src);

          // Chuyển đổi hình ảnh trong Markdown thành đường dẫn tương đối
          const processedHtml = html.replace(/!\[.*?\]\((.*?)\)/g, (_, url) => {
            // Chuyển đổi hình ảnh từ `src/assets` thành đường dẫn từ thư mục gốc
            if (url.startsWith('./src/assets/')) {
              return `![Image](/${path.relative('public', url)})`;
            }
            return `![Image](${url})`;
          });

          return `export default ${JSON.stringify(processedHtml)}`;
        }
      },
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

