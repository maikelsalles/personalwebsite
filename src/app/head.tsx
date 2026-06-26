import ogImage from '@img/maikel-salles-w.jpg';

export default function Head(){
    return (
        <>
            <meta charSet='utf-8'/>
            <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
            <meta property="og:image" content={ogImage.src} />
        </>
    )
}