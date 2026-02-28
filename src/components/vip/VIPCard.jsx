import { Card, CardContent, } from "@/components/ui/card";
import vipFallback from "@/assets/img/vip-fallback.png"

const BASE_URL = import.meta.env.VITE_BASE_URL;

const VIPCard = ({ vip }) => {
    // صورة الخلفية الأساسية
    const vipImage = vip.image || vipFallback;

    // صورة اليسار من المنتج الأول (لو موجود) أو fallback
    const leftImage =
        vip.products[0]?.dynamic_image
            ? `${BASE_URL}/public/vip/${vip.products[0].dynamic_image}`
            : vipFallback;

    // const showProduct = !vipData.length ? staticData : vipData

    return (
        <Card >
            {/* صورة اليسار */}
            <img src={leftImage} alt="left" className="w-24 h-24 object-cover rounded-lg" />

            {/* المحتوى النصي */}
            <div className="flex-1 text-center">
                <h2 className="text-xl font-semibold text-gray-900">{vip.name}</h2>
                <p className="text-gray-600 mt-2">مدة: {vip.duration} يوم</p>
            </div>

            {/* صورة اليمين */}
            <img src={vipImage} alt={vip.name} className="w-24 h-24 object-cover rounded-lg" />

            <CardContent className="p-6">
                {/* {showProduct.map(el => <p>el</p>)} */}

                {/* المميزات */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="font-semibold text-white">Exclusive Privilege</h3>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
};

export default VIPCard;