'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FileUp, Video } from 'lucide-react';

export default function PengajuanPage() {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Ajukan Konten untuk Persetujuan</CardTitle>
          <CardDescription>
            Kirim video Anda untuk ditinjau. Tim akan memeriksa konten sebelum dipublikasikan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="video-url">
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  URL Video
                </div>
              </Label>
              <Input id="video-url" placeholder="https://tiktok.com/..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Catatan (Opsional)</Label>
              <Textarea id="notes" placeholder="Contoh: Ini video untuk challenge terbaru, fokus pada produk X." />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <FileUp className="mr-2 h-4 w-4" />
            Kirim Pengajuan
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
