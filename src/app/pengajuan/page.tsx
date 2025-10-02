
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { FileUp, History, MessageSquare, CheckCircle2, XCircle, Clock, Video, X, RefreshCw, PlayCircle, Download } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

// Mock data for submission history
const initialSubmissionHistory = [
  {
    id: 1,
    fileName: 'video_challenge_final.mp4',
    caption: 'Ini dia video buat dance challenge terbaru!',
    status: 'Disetujui',
    revisionNotes: '',
    date: '2 hari yang lalu',
    screenshotUrl: null,
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
    screenshotUrl: null,
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case 'Disetujui':
      return <Badge variant="default" className="bg-green-600 hover:bg-green-700 font-normal"><CheckCircle2 className="mr-1 h-3 w-3" />{status}</Badge>;
    case 'Ditolak':
      return <Badge variant="destructive" className="font-normal"><XCircle className="mr-1 h-3 w-3" />{status}</Badge>;
    default:
      return <Badge variant="secondary" className="font-normal"><Clock className="mr-1 h-3 w-3" />{status}</Badge>;
  }
};


export default function PengajuanPage() {
  const [historyItems, setHistoryItems] = React.useState(initialSubmissionHistory);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [caption, setCaption] = React.useState('');
  const [resubmissionId, setResubmissionId] = React.useState<number | null>(null);
  const formCardRef = React.useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    const input = document.getElementById('video-file') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  };
  
  const resetForm = () => {
    setCaption('');
    setSelectedFile(null);
    setResubmissionId(null);
    clearFile();
  }

  const handleResubmit = (item: typeof historyItems[0]) => {
    setCaption(item.caption);
    setResubmissionId(item.id);
    formCardRef.current?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('video-file-label')?.focus();
  };
  
  const handleSubmit = () => {
    if (!selectedFile || !caption) {
        toast({
            variant: 'destructive',
            title: 'Formulir Belum Lengkap',
            description: 'Harap unggah file video dan isi caption sebelum mengirim.',
        });
        return;
    }

    if (resubmissionId) {
        // This is a resubmission
        setHistoryItems(prev => 
            prev.map(item => 
                item.id === resubmissionId 
                ? {
                    ...item,
                    fileName: selectedFile.name,
                    caption: caption,
                    status: 'Menunggu Tinjauan',
                    date: 'Baru saja',
                    revisionNotes: '', // Clear old revision notes
                    screenshotUrl: null,
                  } 
                : item
            )
        );
        toast({
            title: 'Berhasil Dikirim Ulang',
            description: `Konten "${selectedFile.name}" telah dikirim ulang untuk ditinjau.`,
        });
    } else {
        // This is a new submission
        const newSubmission = {
            id: Math.max(...historyItems.map(item => item.id), 0) + 1,
            fileName: selectedFile.name,
            caption: caption,
            status: 'Menunggu Tinjauan',
            date: 'Baru saja',
            revisionNotes: '',
            screenshotUrl: null,
        };
        setHistoryItems(prev => [newSubmission, ...prev]);
        toast({
            title: 'Pengajuan Terkirim',
            description: `Konten "${selectedFile.name}" telah berhasil diajukan.`,
        });
    }

    resetForm();
  };

  const sortedHistory = [...historyItems].sort((a, b) => new Date(b.date) as any - (new Date(a.date) as any));


  return (
    <div className="p-6 space-y-6">
      <Card ref={formCardRef}>
        <CardHeader>
          <CardTitle>{resubmissionId ? 'Kirim Ulang Konten' : 'Ajukan Konten Baru'}</CardTitle>
          <CardDescription>
            {resubmissionId ? `Anda sedang mengirim ulang konten dengan ID: ${resubmissionId}. Unggah file baru.` : 'Upload video dan caption Anda untuk ditinjau oleh tim.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
             <div className="flex justify-end gap-2">
                <Button variant="ghost">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Content Reference
                </Button>
                <Button variant="ghost">
                    <Download className="mr-2 h-4 w-4" />
                    Assets Download
                </Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="video-file" className="sr-only">Upload File Video</Label>
              {selectedFile ? (
                <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-muted border">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Video className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <span className="font-medium text-sm truncate">{selectedFile.name}</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={clearFile} className="h-7 w-7 flex-shrink-0">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Hapus file</span>
                  </Button>
                </div>
              ) : (
                <Label id="video-file-label" htmlFor="video-file" tabIndex={0} className="relative block w-full h-48 border-2 border-dashed rounded-lg text-center flex flex-col justify-center items-center cursor-pointer hover:border-primary hover:bg-muted/50 focus-within:border-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-ring transition-colors">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <FileUp className="h-8 w-8 mb-2" />
                    <span className="font-semibold">Seret & lepas file atau klik untuk unggah</span>
                    <span className="text-xs mt-1">Video (MP4, MOV, maks 500MB)</span>
                  </div>
                  <Input 
                    id="video-file" 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    onChange={handleFileChange}
                    accept="video/mp4,video/quicktime"
                  />
                </Label>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="caption">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Caption
                </div>
              </Label>
              <Textarea id="caption" placeholder="Tulis caption untuk video Anda di sini..." value={caption} onChange={(e) => setCaption(e.target.value)} />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>
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
        <CardContent>
            {historyItems.length === 0 ? (
                <div className="text-center text-muted-foreground py-8">
                    Belum ada riwayat pengajuan.
                </div>
            ) : (
                <Accordion type="single" collapsible className="w-full">
                    {historyItems.map((item) => (
                        <AccordionItem value={`item-${item.id}`} key={item.id} className="border-b-0">
                             <AccordionTrigger className="p-4 rounded-lg hover:no-underline hover:bg-muted/50 data-[state=open]:bg-muted/50 data-[state=open]:rounded-b-none">
                                <div className="flex flex-col items-start text-left w-full">
                                    <div className="flex justify-between items-center w-full">
                                        <span className="font-semibold text-sm break-all pr-4">{item.fileName}</span>
                                        <StatusBadge status={item.status} />
                                    </div>
                                    <span className="text-xs text-muted-foreground mt-1">{item.date}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="p-4 pt-0 bg-muted/50 rounded-b-lg">
                                <div className="space-y-4">
                                    <p className="text-sm text-muted-foreground">
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
                                                        <DialogContent className="p-0 border-0 max-w-4xl bg-background/90 backdrop-blur-sm">
                                                          <DialogHeader className='p-6 pb-0'>
                                                            <DialogTitle>Lampiran Revisi</DialogTitle>
                                                            <DialogDescription>
                                                              Tampilan penuh dari gambar lampiran untuk catatan revisi.
                                                            </DialogDescription>
                                                          </DialogHeader>
                                                            <Image
                                                                src={item.screenshotUrl}
                                                                alt="Lampiran Revisi diperbesar"
                                                                width={1200}
                                                                height={675}
                                                                className="rounded-b-lg w-full h-auto"
                                                                data-ai-hint="revision screenshot"
                                                            />
                                                        </DialogContent>
                                                    </Dialog>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {item.status === 'Ditolak' && (
                                      <Button variant="secondary" className="w-full" onClick={() => handleResubmit(item)}>
                                        <RefreshCw className="mr-2 h-4 w-4" />
                                        Kirim Ulang
                                      </Button>
                                    )}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            )}
        </CardContent>
      </Card>
    </div>
  );
}

    