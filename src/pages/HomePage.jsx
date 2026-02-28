import VIPTabs from "@/components/vip/VipTabs";

import bgFallback from "@/assets/img/hero1.png"
import { checkImage } from "@/utils/checkImage";

import { getVipTypes } from "@/services/vip-service";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import { useSelector, useDispatch } from "react-redux";
import { setVipData } from "@/rtk/features/vipSlice";

function HomePage() {
  const dispatch = useDispatch();
  const { vipData, activeVipId } = useSelector((state) => state.vip);
  const [loading, setLoading] = useState(true);

  const [bgImage, setBgImage] = useState(bgFallback);

  const activeVip = vipData.find((v) => v.id === activeVipId);

  useEffect(() => {
    const updateBg = async () => {
      if (activeVip?.image) {
        const isValid = await checkImage(activeVip.image);
        setBgImage(isValid ? activeVip.image : bgFallback);
      } else {
        setBgImage(bgFallback);
      }
    };

    updateBg();
  }, [activeVip]);

  useEffect(() => {
    const fetchVIP = async () => {
      try {
        const res = await getVipTypes();
        dispatch(setVipData(res.data));
        console.log(res); // شوف الداتا

      } catch (error) {
        console.error("VIP ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVIP();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="relative p-6 overflow-hidden min-h-screen">

      {/* Background */}
      <div className="absolute inset-0 h-full">
        <img
          src={bgImage}
          alt="hero"
          className="w-full h-full md:object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 ">
        <VIPTabs />
      </div>

    </div>
  );
}

export default HomePage;
