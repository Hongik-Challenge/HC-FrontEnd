import StyledComponentsRegistry from '@lib/registry';
import Provider from './Provider';

export default function RootLayout({
  children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
      <Provider>
          <StyledComponentsRegistry>
              {children}
          </StyledComponentsRegistry>
      </Provider>
        </body>
    </html>
  );
}