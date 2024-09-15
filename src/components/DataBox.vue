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
