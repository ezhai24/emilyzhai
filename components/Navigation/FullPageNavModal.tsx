import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isNavModalOpen: boolean;
  sections: { label: string; href: string }[];
  closeNavModal: () => void;
  goToSection: (href: string) => void;
}
export const FullPageNavModal = (props: Props) => {
  const { isNavModalOpen, sections, closeNavModal, goToSection } = props;

  return (
    <AnimatePresence>
      {isNavModalOpen && (
        <motion.div
          key="navModal"
          initial={{ height: 0 }}
          animate={{ height: "100vh" }}
          exit={{ height: 0 }}
          className="bg-pink fixed z-50 w-screen md:hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex h-screen flex-col items-center justify-center"
          >
            <div
              onClick={closeNavModal}
              className="absolute top-6 rounded-full border-2 px-6 py-2 hover:cursor-pointer"
            >
              <IoClose />
            </div>
            {sections.map(({ label, href }) => (
              <div
                key={href}
                onClick={() => goToSection(href)}
                className="my-4 hover:cursor-pointer hover:underline"
              >
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullPageNavModal;
