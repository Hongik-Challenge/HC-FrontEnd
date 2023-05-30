import StyledComponentsRegistry from '@lib/registry';
import Provider from './Provider';
import localFont from 'next/font/local';

const pretendardFont = localFont({
	src: '../../public/PretendardVariable.woff2',
	display: 'swap',
});


export default function RootLayout({
  children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pretendardFont.className}>
      <body>
          <StyledComponentsRegistry>
            <Provider>
              {children}
            </Provider>
          </StyledComponentsRegistry>
        </body>
    </html>
  );
}