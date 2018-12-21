<?php

namespace AppBundle\Form;

use AppBundle\Entity\Message;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MessageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, array(
                'attr' => array(
                    'placeholder' => 'Name',
                    'name' => 'dzName',
                    'class' => 'form-control'
                )
            ))
            ->add('email', EmailType::class, array(
                'attr' => array(
                    'placeholder' => 'Email Address',
                    'name' => 'dzEmail',
                    'class' => 'form-control'
                )
            ))
            ->add('message', TextareaType::class, array(
                'attr' => array(
                    'name' => 'dzMessage',
                    'class' => 'form-control',
                    'rows' => 4,
                )
            ))
            ->add('save',  SubmitType::class, array(
                'attr' => array(
                    'name' => 'submit',
                    'class' => 'site-button',
                )
            ))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Message::class,
        ));
    }
}