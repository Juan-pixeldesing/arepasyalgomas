Add-Type -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;

public class ImageUtils {
    public static void RemoveWhite(string inputPath, string outputPath) {
        using (Bitmap bmp = new Bitmap(inputPath)) {
            Bitmap result = new Bitmap(bmp.Width, bmp.Height, PixelFormat.Format32bppArgb);
            for (int y = 0; y < bmp.Height; y++) {
                for (int x = 0; x < bmp.Width; x++) {
                    Color c = bmp.GetPixel(x, y);
                    if (c.R > 230 && c.G > 230 && c.B > 230) {
                        result.SetPixel(x, y, Color.Transparent);
                    } else {
                        result.SetPixel(x, y, c);
                    }
                }
            }
            result.Save(outputPath, ImageFormat.Png);
        }
    }
}
"@ -ReferencedAssemblies System.Drawing

[ImageUtils]::RemoveWhite("C:\Users\User\OneDrive\Documentos\GitHub\arepasyalgomas\logo.jpg", "C:\Users\User\OneDrive\Documentos\GitHub\arepasyalgomas\logo_transparent.png")
