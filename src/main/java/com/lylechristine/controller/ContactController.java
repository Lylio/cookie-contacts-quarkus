package com.lylechristine.controller;

import com.lylechristine.model.Contact;
import com.lylechristine.repository.ContactRepository;
import org.bson.types.ObjectId;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/api/contacts")
public class ContactController {

    private final ContactRepository contactRepository;

    @Inject
    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @GET
    public List<Contact> getContacts() {
        return contactRepository.listAll();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Contact getContact (@PathParam("id") String id) {
        return contactRepository.findById(new ObjectId(id));
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void updateContact (@PathParam("id") String id, Contact contact) {
        contact.setId(new ObjectId(id));
        contactRepository.update(contact);
    }

    @POST
    public Response addContact(Contact contact) {
        contactRepository.persist(contact);
        return Response.status(Response.Status.CREATED).build();
    }

    @DELETE
    @Path("/{id}")
    public void deleteContact(@PathParam("id") String id) {
        Contact contact = contactRepository.findById(new ObjectId(id));
        contactRepository.delete(contact);
    }

}
