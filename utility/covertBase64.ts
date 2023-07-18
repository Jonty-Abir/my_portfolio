export function convertToBase64(file: any) {
    return new Promise((resolve, reject) => {
        const fileRender = new FileReader();
        fileRender?.readAsDataURL(file);
        fileRender.onload = () => {
            resolve(fileRender.result as string);
        };
        fileRender.onerror = (err) => {
            reject(err);
        };
    });
}

export default convertToBase64;