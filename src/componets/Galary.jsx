import { useNavigation } from "react-router-dom";
import LoadingSpainer from "./LoadingSpainer";
import GalleryBanner from "./GalleryBanner";


const Galary = () => {
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <LoadingSpainer></LoadingSpainer>
    }
    return (
        <>
            <GalleryBanner></GalleryBanner>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg border-2 border-orange-300 p-2" src="https://images-workbench.99static.com/NmJK-vSu5g66FkLBfaHTkrB7Jpk=/99designs-contests-attachments/40/40423/attachment_40423997" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg border-2 border-orange-300 p-2" src="https://images-workbench.99static.com/OehhyjGTiZXzTfNGVIJWBga0Zog=/99designs-contests-attachments/115/115048/attachment_115048569" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg border-2 border-orange-300 p-2" src="https://images-workbench.99static.com/i9v4IEkunTs83gOW2j9w4ByNO7E=/99designs-contests-attachments/97/97864/attachment_97864119" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg border-2 border-orange-300 p-2" src="https://images-workbench.99static.com/2iOgPdKNzx68zlTPPDlCanCaoc0=/99designs-contests-attachments/79/79382/attachment_79382532" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg border-2 border-orange-300 p-2" src="https://images-workbench.99static.com/HzNTXiQGx-dz0bfOj9UL3jkDA9U=/99designs-contests-attachments/68/68025/attachment_68025546" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg border-2 border-orange-300 p-2" src="https://images-workbench.99static.com/rdSyB6yT44veKBpXO_xduuDZOsQ=/99designs-contests-attachments/108/108218/attachment_108218680" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg border-2 border-orange-300 p-2" src="https://images-workbench.99static.com/POGk8lTXKdRtNPuty8CdWYQNfYw=/99designs-contests-attachments/90/90319/attachment_90319217" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg border-2 border-orange-300 p-2" src="https://images-workbench.99static.com/338Y158Kwowc-fLB9WnrKp3DcNo=/http://s3.amazonaws.com/projects-files/94/9495/949595/bad5c3c8-7976-4068-ac04-adcea7917614.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg border-2 border-orange-300 p-2" src="https://images-workbench.99static.com/CoxCU8VCCiROPqbguM44qBwX6gI=/99designs-contests-attachments/98/98424/attachment_98424306" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg border-2 border-orange-300 p-2" src="https://images-workbench.99static.com/dPIXRsuU81wcsuN8WZPgfh5DCfk=/99designs-contests-attachments/120/120076/attachment_120076395" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg border-2 border-orange-300 p-2" src="https://images-workbench.99static.com/LhxtCRCC2LoCaiQbbEnSBaDN65Y=/99designs-contests-attachments/117/117313/attachment_117313923" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg border-2 border-orange-300 p-2" src="https://images-platform.99static.com//yCJBb6gT4AR1JfQ54K9cee8XQew=/1121x0:3692x2571/fit-in/590x590/projects-files/50/5034/503447/618326b8-ce72-459c-a126-cb671a78c3f7.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Galary;