import { message } from "@/utils/antComponent";

type messageType = "error" | "info" | "loading" | "success" | "warning";

export function useMessage() {
  const [messageApi, contextHolder] = message.useMessage();
  function showMessage(type: messageType, content: string) {
    messageApi.open({ type, content });
  }
  return {
    messageApi,
    contextHolder,
    showMessage
  };
}
