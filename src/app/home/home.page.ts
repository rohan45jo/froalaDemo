import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';
import 'froala-editor/js/plugins.pkgd.min.js';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  options;
  postOptions;
  constructor() {
    FroalaEditor.DefineIcon('uploadVideo', { NAME: 'insertVideo' });

    // Define a button.
    FroalaEditor.RegisterQuickInsertButton('uploadVideo', {
      // Icon name.
      icon: 'insertVideo',
      title: 'Upload Video File',
      focus: false,
      undo: true,
      videoEditButtons: ['videoReplace', 'videoRemove', '|', 'videoDisplay', 'videoAlign', 'videoSize'],
      refreshAfterCallback: false,
      callback: function (e, editor) {
        $('[data-cmd="' + e + '"].fr-blink').closest('.fr-box').nextAll('textarea:first').addClass('activeFrbox');
        this.video.showInsertPopup();
      }
    });

    // this.options = {
    //   key: 'jG2J2B5C3A4A1uF2C1G1G1A10C1E6A1D6E5hesyhB-13tueC2ffz==',
    //   placeholderText: 'Write your post here...',
    //   toolbarInline: true,
    //   charCounterCount: false,
    //   toolbarVisibleWithoutSelection: false,
    //   pastePlain: true,
    //   autofocus: true,
    //   videoMaxSize: 1024 * 1024 * 25,
    //   imageAddNewLine: true,
    //   quickInsertButtons: ['image', 'uploadVideo'],
    // };

    this.options = {
      key: 'jUA1yD5A3C1D2C1G1pH-7kae1tC-11A-9mD1nnbeF5C4C3E3E2C2C4D6D4D3==',
      placeholderText: 'Type post here...',
      charCounterCount: false,
      toolbarInline: true,
      toolbarVisibleWithoutSelection: false,
      imageTextNear: true,
      pastePlain: true,
      autofocus: true,
      videoMaxSize: 1024 * 1024 * 25,
      imageAddNewLine: true,
      quickInsertButtons: ['image', 'uploadVideo', 'embedly'],
    };

    this.postOptions = {
      events: {
        'froalaEditor.initialized': function (e, editor) {
          setTimeout(() => {
            editor.events.focus(true);
          }, 100);
        }
      },
      key: 'jUA1yD5A3C1D2C1G1pH-7kae1tC-11A-9mD1nnbeF5C4C3E3E2C2C4D6D4D3==',
      scrollableContainer: '.post-editor-body',
      placeholderText: 'Type post here...',
      toolbarInline: true,
      charCounterCount: false,
      toolbarVisibleWithoutSelection: false,
      imageTextNear: true,
      requestHeaders: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      },
      pastePlain: true,
      autofocus: true,
      videoMaxSize: 1024 * 1024 * 25,
      imageAddNewLine: true,
      quickInsertButtons: ['image', 'uploadVideo', 'embedly'],
      toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', '|',
        'quote', 'fontSize', 'insertLink', 'align', 'paragraphFormat', '|',
        'insertImage', 'insertVideo', 'embedly'
      ],
    };
  }
  ngOnInit() {
  }
}
