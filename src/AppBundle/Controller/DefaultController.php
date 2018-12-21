<?php

namespace AppBundle\Controller;

use AppBundle\Entity\MailingList;
use AppBundle\Entity\Message;
use AppBundle\Form\MessageType;
use AppBundle\Form\EmailListType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        $email = new MailingList();
        $form = $this->createForm(EmailListType::class, $email);
        $form->handleRequest($request);
        if ($request->isMethod('POST') && $form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($email);
            $em->flush();
            return $this->redirectToRoute('homepage');
        }

        $message = new Message();
        $form1 = $this->createForm(MessageType::class, $message);
        $form1->handleRequest($request);
        if ($request->isMethod('POST') && $form1->isSubmitted() && $form1->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($message);
            $em->flush();
            return $this->redirectToRoute('homepage');
        }

        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
            'form' => $form->createView(),
            'form1' => $form1->createView(),
        ]);
    }


}
