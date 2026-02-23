import { Metadata } from 'next';
import ErrorMain from '@/pages/error/error-main'
 
export const metadata: Metadata = {
  title: "Vert Idee - Page Not Found",
};

export default function NotFound() {
  return (
    <ErrorMain/>
  )
}