<?php

namespace AppBundle\Form;

use AppBundle\Entity\MailingList;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EmailListType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, array(
                'attr' => array(
                    'placeholder' => 'Email Address',
                    'id' => 'contact_name',
                    'name' => 'name',
                    'class' => 'form-control radius-xl'
                )
            ))
            ->add('save',  SubmitType::class, array(
                'attr' => array(
                    'class' => 'site-button radius-xl outline btn-block',
                )
            ))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => MailingList::class,
        ));
    }
}