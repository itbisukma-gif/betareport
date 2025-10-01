
'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FileUp, Upload, History, MessageSquare, CheckCircle2, XCircle, Clock } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

// Mock data for submission history
const submissionHistory = [
  {
    id: 1,
    fileName: 'video_challenge_final.mp4',
    caption: 'Ini dia video buat dance challenge terbaru!',
    status: 'Disetujui',
    revisionNotes: '',
    date: '2 hari yang lalu',
  },
  {
    id: 2,
    fileName: 'behind_the_scenes_dapur.mp4',
    caption: 'Keseruan di balik layar dapur MBG.',
    status: 'Ditolak',
    revisionNotes: 'Kualitas video terlalu gelap di beberapa bagian. Coba ambil ulang dengan pencahayaan lebih baik. Hindari merekam area tempat sampah.',
    date: '4 hari yang lalu',
    screenshotUrl: 'https://picsum.photos/seed/revision/400/225',
  },
  {
    id: 3,
    fileName: 'resep_baru_preview.mov',
    caption: 'Teaser resep baru yang akan datang!',
    status: 'Menunggu Tinjauan',
    revisionNotes: '',
    date: '1 jam yang lalu',
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case 'Disetujui':
      return <Badge variant="default" className="bg-green-600 hover:bg-green-700"><CheckCircle2 className="mr-1 h-3 w-3" />{status}</Badge>;
    case 'Ditolak':
      return <Badge variant="destructive"><XCircle className="mr-1 h-3 w-3" />{status}</Badge>;
    default:
      return <Badge variant="secondary"><Clock className="mr-1 h-3 w-3" />{status}</Badge>;
  }
};


export default function PengajuanPage() {
  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ajukan Konten Baru</CardTitle>
          <CardDescription>
            Upload video dan caption Anda untuk ditinjau oleh tim.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="video-file">
                <div className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Upload File Video
                </div>
              </Label>
              <Input id="video-file" type="file" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="caption">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Caption
                </div>
              </Label>
              <Textarea id="caption" placeholder="Tulis caption untuk video Anda di sini..." />
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

      <Card>
        <CardHeader>
            <CardTitle>
                <div className='flex items-center gap-2'>
                    <History className="h-5 w-5"/>
                    Riwayat Pengajuan
                </div>
            </CardTitle>
          <CardDescription>Lihat status konten yang pernah Anda ajukan.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            {submissionHistory.length === 0 ? (
                <div className="text-center text-muted-foreground py-8">
                    Belum ada riwayat pengajuan.
                </div>
            ) : (
                submissionHistory.map((item) => (
                    <div key={item.id} className="border p-4 rounded-lg space-y-3 bg-muted/20">
                        <div>
                            <div className="flex justify-between items-start">
                                <span className="font-semibold text-sm break-all">{item.fileName}</span>
                                <StatusBadge status={item.status} />
                            </div>
                            <span className="text-xs text-muted-foreground">{item.date}</span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2">
                           <span className="font-medium text-foreground">Caption: </span> "{item.caption}"
                        </p>

                        {item.revisionNotes && (
                            <div className="text-sm text-destructive-foreground bg-destructive/80 p-3 rounded-md space-y-2">
                                <div>
                                    <p className="font-bold mb-1">Catatan Revisi:</p>
                                    <p>{item.revisionNotes}</p>
                                </div>
                                {item.screenshotUrl && (
                                    <div>
                                        <p className="font-bold mb-1">Lampiran:</p>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Image
                                                    src={item.screenshotUrl}
                                                    alt="Lampiran Revisi"
                                                    width={400}
                                                    height={225}
                                                    className="rounded-md border-2 border-white/50 w-full h-auto cursor-pointer"
                                                    data-ai-hint="revision screenshot"
                                                />
                                            </DialogTrigger>
                                            <DialogContent className="p-0 border-0 max-w-4xl">
                                                <Image
                                                    src={item.screenshotUrl}
                                                    alt="Lampiran Revisi diperbesar"
                                                    width={1200}
                                                    height={675}
                                                    className="rounded-lg w-full h-auto"
                                                    data-ai-hint="revision screenshot"
                                                />
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))
            )}
        </CardContent>
      </Card>
    </div>
  );
}
