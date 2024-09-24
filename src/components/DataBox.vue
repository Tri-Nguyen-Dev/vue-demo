<template>
  <div class="chat-box">
    <div
        class="messages"
        ref="messageContainer"
        @scroll="onScroll"
    >
      <!-- Các tin nhắn trong chat -->
      <div v-for="(message, index) in typedMessages" :key="index" class="message">
        {{ message }}
      </div>
    </div>

    <!-- Input để nhập tin nhắn -->
    <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="Nhập tin nhắn..."
    />
  </div>
</template>

<script>
import { ref, nextTick } from 'vue';

export default {
  setup() {
    const messages = ref([]); // Lưu trữ tất cả các tin nhắn
    const typedMessages = ref([]); // Lưu trữ các tin nhắn đã được gõ
    const newMessage = ref('');
    const messageQueue = ref([]); // Hàng đợi để lưu trữ tin nhắn đến
    const isTyping = ref(false); // Theo dõi trạng thái gõ
    const messageContainer = ref(null); // Tham chiếu tới container tin nhắn
    const autoScrollEnabled = ref(true); // Kiểm tra xem có auto-scroll hay không

    const processQueue = async () => {
      if (isTyping.value || messageQueue.value.length === 0) return;

      isTyping.value = true;
      const message = messageQueue.value.shift(); // Lấy tin nhắn đầu tiên từ hàng đợi
      typedMessages.value.push(''); // Thêm một dòng trống vào danh sách hiển thị

      await typeMessage(message);

      isTyping.value = false;

      // Tiếp tục xử lý hàng đợi sau khi hoàn tất tin nhắn
      if (messageQueue.value.length > 0) {
        processQueue();
      }
    };

    const typeMessage = (fullMessage) => {
      return new Promise((resolve) => {
        let currentMessage = '';
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
          if (currentIndex < fullMessage.length) {
            currentMessage += fullMessage[currentIndex];
            typedMessages.value[typedMessages.value.length - 1] = currentMessage;
            currentIndex++;

            // Tự động cuộn xuống dưới mỗi khi thêm ký tự mới
            if (autoScrollEnabled.value) {
              nextTick(() => scrollToBottom());
            }
          } else {
            clearInterval(typingInterval);
            resolve(); // Kết thúc quá trình gõ
          }
        }, 10); // Tốc độ gõ (100ms cho mỗi ký tự)
      });
    };

    const sendMessage = () => {
      if (newMessage.value.trim() !== '') {
        messageQueue.value.push(newMessage.value); // Đẩy tin nhắn vào hàng đợi
        newMessage.value = ''; // Xoá input
        processQueue(); // Bắt đầu xử lý hàng đợi
      }
    };

    const scrollToBottom = () => {
      const container = messageContainer.value;
      container.scrollTop = container.scrollHeight; // Cuộn tới cuối cùng
    };

    const onScroll = () => {
      const container = messageContainer.value;
      // Kiểm tra xem người dùng có đang cuộn ở cuối hay không
      const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;

      // Bật hoặc tắt tự động cuộn xuống dưới
      autoScrollEnabled.value = isAtBottom;
    };

    return {
      newMessage,
      typedMessages,
      sendMessage,
      messageContainer,
      onScroll,
    };
  },
};
</script>

<style scoped>
.chat-box {
  max-width: 400px;
  margin: 0 auto;
}

.messages {
  border: 1px solid #ccc;
  padding: 10px;
  height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.message {
  margin: 5px 0;
  font-family: monospace;
  padding: 12px;
  background-color: #f4f4f4;
}
</style>
