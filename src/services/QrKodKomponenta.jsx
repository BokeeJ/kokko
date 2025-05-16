import QRCode from 'react-qr-code';

function QrKodKomponenta() {
    return (
        <div className="flex justify-center mt-6">
            <QRCode
                value="https://kokko.vercel.app/katalog"
                size={200}
            />
        </div>
    );
}

export default QrKodKomponenta;
