import React from "react";
import {
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";

function AlertDialogExample(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

 const handleCopyClick = () => {
  // Check if the Clipboard API is available
  if (navigator.clipboard) {
    // Copy the URL to the clipboard
    navigator.clipboard.writeText(props.urlshort)
      .then(() => {
        console.log('URL copied to clipboard');
        onClose();
      })
      .catch((error) => {
        console.error('Failed to copy URL: ', error);
      });
  } else {
    // Clipboard API not available, you can use a fallback method
    // For example, you can create a temporary input element to copy the text
    const tempInput = document.createElement('input');
    tempInput.value = props.urlshort;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    onClose();
  }
};

  return (
    <>
      <Button
        colorScheme="blackAlpha"
        width={{ base: "70%", md: "70%" }}
        m="auto"
        my="2%"
        type="submit"
        onClick={onOpen}
      >
        Shorten URL
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Done!
            </AlertDialogHeader>

            <AlertDialogBody>
              {props.urlshort}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>

              <Button colorScheme="green" onClick={handleCopyClick} ml={3}>
                Copy
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default AlertDialogExample;
