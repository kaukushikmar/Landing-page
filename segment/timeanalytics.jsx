import { analytics } from "../segment/analytics";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function useTimeSpent(name) {
  const router = useRouter();
  useEffect(() => {
    const time = new Date();
    return () => {
      const timePage = new Date() - time;
      analytics.track(`Time spent on ${name}`, { time: timePage / 1000 });
    };
  }, []);
}
